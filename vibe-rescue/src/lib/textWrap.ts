import type { jsPDF } from 'jspdf'

/** Reduce single-word / short last lines after jsPDF splitTextToSize. */
export function wrapTextAvoidOrphans(
  doc: jsPDF,
  text: string,
  maxWidth: number,
): string[] {
  let lines = doc.splitTextToSize(text, maxWidth) as string[]

  if (lines.length >= 2) {
    const lastLine = lines[lines.length - 1] ?? ''
    const words = lastLine.trim().split(/\s+/).filter(Boolean)

    if (words.length <= 2 && lastLine.length < 40) {
      const merged = `${lines[lines.length - 2]} ${lastLine}`
      lines = doc.splitTextToSize(merged, maxWidth) as string[]
    }
  }

  return lines
}
