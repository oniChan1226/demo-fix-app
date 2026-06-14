import { sampleDeliveryReport, type FixReport } from '../data/sampleDeliveryReport'

function formatReportText(report: FixReport): string {
  const lines = [
    'FIX REPORT',
    '',
    report.issueTitle,
    report.disclaimer,
    '',
    'FIXED & VERIFIED',
    `Stack: ${report.stack} | Severity: ${report.severity} | Turnaround: ${report.turnaround}`,
    '',
    'THE SYMPTOM',
    ...report.symptom.map((p) => p),
    '',
    'WHAT WAS ACTUALLY WRONG',
    ...report.whatWasWrong.map((p) => p),
    '',
    'WHAT I CHANGED',
    ...report.whatChanged.map((item) => `• ${item}`),
    '',
    'HOW TO VERIFY THE FIX',
    ...report.howToVerify.map((item) => `• ${item}`),
    '',
    'HOW TO KEEP IT FROM HAPPENING AGAIN',
    ...report.prevention.map((p) => p),
    '',
    report.orderNote,
    '',
    report.authorLine,
    report.authorSubline,
  ]

  return lines.join('\n')
}

export function downloadSampleReport() {
  const content = formatReportText(sampleDeliveryReport)
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'vibe-rescue-sample-fix-report.txt'
  link.click()
  URL.revokeObjectURL(url)
}
