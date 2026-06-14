import { jsPDF } from 'jspdf'
import {
  getReportSectionContent,
  reportSectionDefs,
} from '../data/reportSections'
import { sampleDeliveryReport, type FixReport } from '../data/sampleDeliveryReport'
import { wrapTextAvoidOrphans } from './textWrap'

const MARGIN = 56
const LINE_HEIGHT = 1.45

type PdfCursor = {
  y: number
}

function pageHeight(doc: jsPDF) {
  return doc.internal.pageSize.getHeight()
}

function pageWidth(doc: jsPDF) {
  return doc.internal.pageSize.getWidth()
}

function ensureSpace(doc: jsPDF, cursor: PdfCursor, needed: number) {
  const bottom = pageHeight(doc) - MARGIN
  if (cursor.y + needed > bottom) {
    doc.addPage()
    cursor.y = MARGIN
  }
}

function drawLines(
  doc: jsPDF,
  cursor: PdfCursor,
  lines: string[],
  fontSize: number,
  color: [number, number, number],
  lineGap = 6,
) {
  doc.setFontSize(fontSize)
  doc.setTextColor(...color)
  const step = fontSize * LINE_HEIGHT + lineGap

  for (const line of lines) {
    ensureSpace(doc, cursor, step)
    doc.text(line, MARGIN, cursor.y)
    cursor.y += step
  }
}

function drawParagraph(
  doc: jsPDF,
  cursor: PdfCursor,
  text: string,
  maxWidth: number,
  fontSize: number,
  color: [number, number, number],
) {
  doc.setFont('helvetica', 'normal')
  const lines = wrapTextAvoidOrphans(doc, text, maxWidth)
  drawLines(doc, cursor, lines, fontSize, color, 4)
  cursor.y += 4
}

function drawSectionHeading(doc: jsPDF, cursor: PdfCursor, heading: string) {
  ensureSpace(doc, cursor, 36)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(107, 114, 128)
  doc.text(heading, MARGIN, cursor.y)
  cursor.y += 22
}

function drawBulletList(
  doc: jsPDF,
  cursor: PdfCursor,
  items: string[],
  maxWidth: number,
) {
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(55, 65, 81)

  for (const item of items) {
    const bulletWidth = 14
    const lines = wrapTextAvoidOrphans(doc, item, maxWidth - bulletWidth)
    ensureSpace(doc, cursor, lines.length * 18 + 8)

    lines.forEach((line, index) => {
      if (index === 0) {
        doc.setFillColor(34, 197, 94)
        doc.circle(MARGIN + 3, cursor.y - 3, 2, 'F')
        doc.text(line, MARGIN + bulletWidth, cursor.y)
      } else {
        doc.text(line, MARGIN + bulletWidth, cursor.y)
      }
      cursor.y += 16
    })
    cursor.y += 6
  }
}

export function buildSampleReportPdf(report: FixReport = sampleDeliveryReport): jsPDF {
  const doc = new jsPDF({ unit: 'pt', format: 'a4', compress: true })
  const maxWidth = pageWidth(doc) - MARGIN * 2
  const cursor: PdfCursor = { y: MARGIN }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(107, 114, 128)
  doc.text('FIX REPORT', MARGIN, cursor.y)
  cursor.y += 28

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.setTextColor(17, 24, 39)
  const titleLines = wrapTextAvoidOrphans(doc, report.issueTitle, maxWidth)
  drawLines(doc, cursor, titleLines, 20, [17, 24, 39], 2)
  cursor.y += 6

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(107, 114, 128)
  drawParagraph(doc, cursor, report.disclaimer, maxWidth, 10, [107, 114, 128])
  cursor.y += 8

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(22, 163, 74)
  doc.text('FIXED & VERIFIED', MARGIN, cursor.y)
  cursor.y += 18

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(107, 114, 128)
  const meta = `Stack: ${report.stack}  ·  Severity: ${report.severity}  ·  Turnaround: ${report.turnaround}`
  drawParagraph(doc, cursor, meta, maxWidth, 10, [107, 114, 128])
  cursor.y += 12

  for (const section of reportSectionDefs) {
    drawSectionHeading(doc, cursor, section.headingUpper)
    const content = getReportSectionContent(report, section.id)

    if (section.type === 'list') {
      drawBulletList(doc, cursor, content, maxWidth)
    } else {
      for (const paragraph of content) {
        drawParagraph(doc, cursor, paragraph, maxWidth, 11, [55, 65, 81])
      }
    }

    cursor.y += 8
  }

  ensureSpace(doc, cursor, 80)
  doc.setDrawColor(232, 236, 240)
  doc.line(MARGIN, cursor.y, pageWidth(doc) - MARGIN, cursor.y)
  cursor.y += 24

  drawParagraph(doc, cursor, report.orderNote, maxWidth, 11, [55, 65, 81])
  cursor.y += 8

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(17, 24, 39)
  drawParagraph(doc, cursor, report.authorLine, maxWidth, 11, [17, 24, 39])

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  drawParagraph(doc, cursor, report.authorSubline, maxWidth, 10, [107, 114, 128])

  return doc
}

export function downloadSampleReport() {
  buildSampleReportPdf().save('vibe-rescue-sample-fix-report.pdf')
}
