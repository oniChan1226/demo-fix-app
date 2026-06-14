import type { FixReport } from './sampleDeliveryReport'

export type ReportSectionId =
  | 'symptom'
  | 'whatWasWrong'
  | 'whatChanged'
  | 'howToVerify'
  | 'prevention'

export type ReportSectionDef = {
  id: ReportSectionId
  heading: string
  headingUpper: string
  type: 'paragraphs' | 'list'
}

export const reportSectionDefs: ReportSectionDef[] = [
  {
    id: 'symptom',
    heading: 'The symptom',
    headingUpper: 'THE SYMPTOM',
    type: 'paragraphs',
  },
  {
    id: 'whatWasWrong',
    heading: 'What was actually wrong',
    headingUpper: 'WHAT WAS ACTUALLY WRONG',
    type: 'paragraphs',
  },
  {
    id: 'whatChanged',
    heading: 'What I changed',
    headingUpper: 'WHAT I CHANGED',
    type: 'list',
  },
  {
    id: 'howToVerify',
    heading: 'How to verify the fix',
    headingUpper: 'HOW TO VERIFY THE FIX',
    type: 'list',
  },
  {
    id: 'prevention',
    heading: 'How to keep it from happening again',
    headingUpper: 'HOW TO KEEP IT FROM HAPPENING AGAIN',
    type: 'paragraphs',
  },
]

export function getReportSectionContent(
  report: FixReport,
  id: ReportSectionId,
): string[] {
  switch (id) {
    case 'symptom':
      return report.symptom
    case 'whatWasWrong':
      return report.whatWasWrong
    case 'whatChanged':
      return report.whatChanged
    case 'howToVerify':
      return report.howToVerify
    case 'prevention':
      return report.prevention
  }
}
