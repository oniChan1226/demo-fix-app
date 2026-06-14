/**
 * Fix report content — matches the Final Template.pdf structure.
 * Edit this file when adding real client reports.
 */
export type FixReport = {
  id: string
  issueTitle: string
  disclaimer: string
  stack: string
  severity: string
  turnaround: string
  symptom: string[]
  whatWasWrong: string[]
  whatChanged: string[]
  howToVerify: string[]
  prevention: string[]
  orderNote: string
  authorLine: string
  authorSubline: string
}

export const sampleDeliveryReport: FixReport = {
  id: 'sample-auth-loop',
  issueTitle: 'Auth redirect loop',
  disclaimer:
    'Sample report shown as an example of what you receive with every order. Project details are illustrative.',
  stack: 'Lovable, Supabase',
  severity: 'Critical',
  turnaround: '1 day',
  symptom: [
    'Users could type in their email and password, but the login never completed. The screen sat on a spinner that said "Redirecting..." and then bounced straight back to the login page.',
    'Some users got stuck moving between the login screen and the dashboard without ever landing on either. From the outside it looked like the password was wrong, even when it was correct.',
  ],
  whatWasWrong: [
    'The app was checking whether the user was signed in before Supabase had finished loading the session. On the first render the session was still empty, so the check assumed the user was logged out and sent them back to login.',
    'A moment later the session loaded, the dashboard tried to send them in again, and the two redirects fought each other. That back and forth is the loop.',
    'In short, the login itself worked. The real problem was timing: the redirect ran before the session was ready, using a stale read of the auth state.',
  ],
  whatChanged: [
    'Added a proper loading state for auth, so the app waits until Supabase has actually resolved the session before deciding where to send the user.',
    'Replaced the early session read with a getSession() guard that only runs the redirect once the auth state is known, not on the first empty render.',
    'Subscribed to onAuthStateChange so login, logout, and token refresh all update the app in one reliable place instead of several competing checks.',
    'Removed the duplicate redirect on the dashboard side that was triggering the second half of the loop.',
  ],
  howToVerify: [
    'Log in with valid credentials. You now land on the dashboard once, with no flicker and no bounce back to login.',
    'Refresh the page while signed in and you stay signed in.',
    'Log out and you are returned to the login screen cleanly, with no loop in either direction.',
  ],
  prevention: [
    'Treat the auth session as something that loads, not something that is instantly there. Before any redirect based on whether the user is logged in, wait for the session to resolve, and keep that decision in a single place.',
    'Most auth loops in AI-built apps come from reading the session too early and from having more than one piece of code trying to redirect at the same time.',
  ],
  orderNote:
    'What you get with every order: the working fix, tested before delivery, plus a report like this one that explains what was broken, why it happened, and exactly what changed.',
  authorLine: 'Fahad Khan | Full-stack developer (React, Next.js, Node, Supabase)',
  authorSubline: 'Maker of Forge, a live productivity SaaS.',
}
