/**
 * Cauris guided tour — sample copy and UI only; no accounts or backend.
 */

import { MAILTO_SUBJECTS } from "@/data/siteContact";

/** Header progress labels (order = step index 0…7). */
export const demoStepLabels = [
  "Welcome",
  "Workspace",
  "Timeline",
  "Helix",
  "Insight",
  "Compass",
  "Vault",
  "Early Access",
] as const;

export const demoWelcome = {
  title: "Cauris Demo",
  subheadline: "Walk the product arc — from first capture to calm guidance.",
  body: "Browser-only walkthrough: sample thread and UI, no account and nothing sent to a server. Same story the product is built around — capture, then structure, then guidance you can weigh for yourself.",
  ctaStart: "Begin the tour",
};

/** Step-specific editorial eyebrow — product language, sample data. */
export const demoPhaseEyebrows = {
  workspace: "Capture · workspace (sample)",
  timeline: "Chronology · ordered memory",
  helix: "Structure · pattern layer",
  insight: "Synthesis · primary read",
  compass: "Orientation · gentle guidance",
  vault: "Retention · secure reference",
  earlyAccess: "Roadmap · stay with the build",
} as const;

// —— Phase 3: Workspace ——

export const demoWorkspaceIntro = {
  title: "Workspace",
  supporting:
    "Where a single thread of life input becomes structured signals — the base layer everything else reads from.",
};

/** Opening fictional user turn (public-safe demo). */
export const demoWorkspaceUserMessage =
  "I had an early start, handled a full workday, made progress on a personal project, and ended the evening reflecting on what I got done.";

export const demoWorkspaceThreadReplies = [
  {
    kind: "cauris" as const,
    body: "Logged. I’m detecting continuity across routine, effort, and end-of-day reflection.",
  },
  {
    kind: "cauris" as const,
    variant: "system" as const,
    body: "Would you like me to organize this into memory, timeline, and pattern signals?",
  },
];

export const demoWorkspaceStructuredSignals = {
  sectionTitle: "Structured Signals",
  cards: [
    {
      title: "Routine consistency detected",
      detail: "A stable opening rhythm is beginning to emerge.",
    },
    {
      title: "Focused effort present",
      detail: "The day includes sustained responsibility and follow-through.",
    },
    {
      title: "Evening reflection present",
      detail: "Reflection adds emotional context and improves future pattern clarity.",
    },
    {
      title: "Project momentum detected",
      detail: "Personal build activity suggests intentional long-term movement.",
    },
  ],
  footerSummary:
    "Cauris is beginning to organize this input into memory, chronology, and pattern structure. Next: Timeline orders these moments in sequence.",
};

export const demoWorkspaceChips = ["Memories", "Timeline", "Patterns", "Insight"] as const;

export const demoWorkspaceComposer = {
  placeholder: "Add a line to the thread (optional)...",
  sendLabel: "Send",
  helper: "Sample replies only — nothing leaves your browser.",
};

/**
 * Keyword → scripted reply for optional composer interaction (all generic fiction).
 */
export const demoWorkspaceScriptedReplies: { match: string; reply: string }[] = [
  {
    match: "tired",
    reply:
      "Noted. I’m reading a recovery signal — lighter pacing tomorrow could balance today’s output.",
  },
  {
    match: "excited",
    reply: "Captured. Elevated energy is worth anchoring — it often pairs with momentum worth revisiting.",
  },
  {
    match: "plan",
    reply: "Understood. We can treat this as a planning thread and sequence next moves without losing context.",
  },
  {
    match: "remember",
    reply: "I’ll hold this as a recall anchor for when you return to the thread.",
  },
];

export const demoWorkspaceDefaultReply =
  "Received. I’m threading this into your Workspace narrative so deeper layers can reference it later.";

// —— Phase 4: Timeline ——

export const demoTimelineIntro = {
  title: "Timeline",
  supporting: "Timeline turns Workspace capture into organized chronological memory.",
};

/** Fictional day arc — aligned narratively with the Workspace demo (no real dates). */
export const demoTimelineEntries = [
  {
    period: "Early morning",
    headline: "Started the day with intention",
    supporting: "Energy began with purpose and direction",
  },
  {
    period: "Morning",
    headline: "Settled into the workday",
    supporting: "Steady rhythm and clear priorities took shape",
  },
  {
    period: "Midday",
    headline: "Managed key responsibilities",
    supporting: "Primary responsibilities shaped the middle of the day",
  },
  {
    period: "Evening",
    headline: "Returned to a personal build or project",
    supporting: "Personal momentum returned later in the evening",
  },
  {
    period: "Night",
    headline: "Reflected on the day",
    supporting: "Reflection closed the cycle with context",
  },
] as const;

export const demoTimelineChronology = {
  sectionTitle: "Chronology formed",
  body: "Cauris begins organizing moments into a structured sequence, making lived experience easier to revisit, understand, and connect later.",
};

export const demoTimelineChips = [
  "Chronological",
  "Organized",
  "Recall-ready",
  "Memory structure",
] as const;

/** Continuity hint linking back to the Workspace step (demo only). */
export const demoTimelineContinuity = {
  label: "Same thread, now in order",
  note: "Sample day — shows how capture becomes chronology.",
};

// —— Phase 5: Helix ——

export const demoHelixIntro = {
  title: "Helix",
  supporting: "Helix reveals how themes and signals relate across what you capture.",
  secondary: "Moments, signals, and recurring themes connect into a living structure.",
};

export const demoHelixContinuity = {
  label: "Chronology has now become connection",
  note: "Illustrative graph from the same sample thread.",
};

/** Node positions in SVG viewBox `0 0 120 100` (fictional graph). */
export const demoHelixNodes = [
  { id: "insight", label: "Insight", x: 52, y: 46 },
  { id: "work", label: "Work", x: 22, y: 30 },
  { id: "consistency", label: "Consistency", x: 28, y: 58 },
  { id: "energy", label: "Energy", x: 16, y: 50 },
  { id: "focus", label: "Focus", x: 78, y: 34 },
  { id: "reflection", label: "Reflection", x: 92, y: 22 },
  { id: "building", label: "Building", x: 82, y: 68 },
  { id: "momentum", label: "Momentum", x: 58, y: 80 },
] as const;

/** Undirected edges (rendered once). */
export const demoHelixEdges = [
  ["work", "consistency"],
  ["work", "insight"],
  ["consistency", "insight"],
  ["energy", "focus"],
  ["energy", "insight"],
  ["focus", "insight"],
  ["reflection", "insight"],
  ["reflection", "building"],
  ["building", "momentum"],
  ["building", "insight"],
  ["momentum", "insight"],
] as const;

export const demoHelixPanel = {
  title: "Connected signals",
  body: "Cauris begins linking repeated behaviors, themes, and emotional signals so moments are no longer isolated. What appears separate in conversation becomes connected in structure.",
  cards: [
    {
      title: "Work and consistency",
      detail: "Work and consistency are reinforcing each other",
    },
    {
      title: "Reflection",
      detail: "Reflection strengthens future understanding",
    },
    {
      title: "Energy and focus",
      detail: "Energy and focus move together",
    },
    {
      title: "Building",
      detail: "Building activity is forming a recurring pattern",
    },
  ],
} as const;

// —— Phase 6: Insight ——

export const demoInsightIntro = {
  title: "Insight",
  supporting: "Signals from daily activity become calm, actionable understanding.",
  secondary: "Insight helps surface what is forming beneath the pattern layer.",
};

export const demoInsightContinuity = {
  label: "Patterns are now being interpreted",
  note: "Plain-language read on the same fictional day — not a live assessment engine.",
};

export const demoInsightMain = {
  title: "Illuminated reasoning",
  body: "Cauris is beginning to interpret repeated signals across routine, effort, energy, and reflection. What was captured as daily input is now becoming understandable pattern language.",
};

/** Fictional summaries aligned with the same demo day as Workspace / Timeline / Helix. */
export const demoInsightCards = [
  {
    title: "Energy Pattern",
    detail: "Strong start, softer finish.",
  },
  {
    title: "Builder Momentum",
    detail: "Sustained through the day.",
  },
  {
    title: "Work Signal",
    detail: "Stable routine is forming.",
  },
  {
    title: "Reflection Density",
    detail: "Present enough to improve future understanding.",
  },
] as const;

export const demoInsightSupport = {
  title: "What Insight is doing",
  body: "Insight translates captured behavior and connected patterns into language you can use. It is designed to help you understand what is emerging without overwhelming you.",
  tags: ["Interpretive", "Measured", "Pattern-aware", "Action-ready"] as const,
};

// —— Phase 7: Compass ——

export const demoCompassIntro = {
  title: "Compass",
  supporting: "Compass helps prioritize what matters next.",
  secondary: "It translates understanding into direction without overwhelming the signal.",
};

export const demoCompassContinuity = {
  label: "Understanding is becoming direction",
  note: "Grounded suggestions tied to the preview story — not personalized advice.",
};

export const demoCompassMain = {
  title: "Directional guidance",
  body: "Cauris is beginning to translate memory, pattern, and insight into clear next-step guidance. The goal is not pressure — it is orientation.",
};

/** Grounded next-step suggestions aligned with the same fictional demo day. */
export const demoCompassGuidance = [
  {
    title: "Protect focused time for meaningful work",
    detail:
      "Momentum is strongest when distraction is reduced during high-energy windows.",
  },
  {
    title: "Keep supportive routines consistent",
    detail: "Stable beginnings are reinforcing clarity, effort, and follow-through.",
  },
  {
    title: "Capture more reflection at the end of the day",
    detail: "Small reflection moments strengthen future pattern accuracy and emotional context.",
  },
  {
    title: "Preserve momentum without draining reserve",
    detail: "Progress is strongest when effort and recovery stay in balance.",
  },
] as const;

export const demoCompassSupport = {
  title: "How Compass works",
  body: "Compass does not try to control your life. It helps surface where energy, attention, and momentum may be best directed based on the signals already forming.",
  tags: ["Directional", "Signal-based", "Measured", "Human-centered"] as const,
};

// —— Phase 8: Vault ——

export const demoVaultIntro = {
  title: "Vault",
  supporting: "Vault stores what you choose to keep as secure reference material.",
  secondary:
    "Important materials stay connected to the larger intelligence system without losing their value as retained artifacts.",
};

export const demoVaultContinuity = {
  label: "Understanding can now be retained",
  note: "Reference material stays in-system beside intelligence — categories shown are illustrative only.",
};

export const demoVaultMain = {
  title: "Retained with intention",
  body: "Cauris helps preserve important materials as secure reference layers — giving memory, structure, and future understanding something stable to build on.",
};

/** Fictional artifact categories for the demo retention layer. */
export const demoVaultArtifacts = [
  {
    id: "notes",
    title: "Notes",
    detail: "Saved reflections and written context.",
  },
  {
    id: "screenshots",
    title: "Screenshots",
    detail: "Visual captures tied to memory and reference.",
  },
  {
    id: "files",
    title: "Files",
    detail: "Structured documents and imported materials.",
  },
  {
    id: "photos",
    title: "Photos",
    detail: "Stored moments and visual anchors.",
  },
  {
    id: "exports",
    title: "Exports",
    detail: "Portable records prepared for future use.",
  },
] as const;

export const demoVaultSupport = {
  title: "Why Vault matters",
  body: "Not everything should disappear after interpretation. Vault gives important material a durable place inside the system, so what matters can remain available when needed.",
  tags: ["Secure", "Retained", "Reference-ready", "Intentional"] as const,
};

// —— Phase 9: Early Access ——

export const demoEarlyAccessIntro = {
  title: "See where Cauris is going.",
  supporting:
    "In development: life-side intelligence — memory, structure, insight, calm guidance.",
  secondary:
    "Early access, waitlist, or a straight note — each opens your mail app with the right subject; you send when ready.",
};

export const demoEarlyAccessContinuity = {
  label: "Memory, structure, insight — opening to early access",
  note: "One coherent sample thread. Ready to talk? Email the studio from here — no signup wall.",
};

export const demoEarlyAccessCtas = [
  {
    id: "early-access",
    label: "Request early access",
    description: "Signal interest in hands-on Cauris as invitations open.",
    subject: "Cauris Early Access Request",
    emphasis: "primary" as const,
  },
  {
    id: "waitlist",
    label: "Join the waitlist",
    description: "Get occasional updates — no spam, no obligation.",
    subject: "Cauris Waitlist Interest",
    emphasis: "secondary" as const,
  },
  {
    id: "demo",
    label: "Continue after the demo",
    description: "Reference this tour and ask what you still want to understand.",
    subject: MAILTO_SUBJECTS.caurisAfterDemo,
    emphasis: "secondary" as const,
  },
] as const;

export const demoEarlyAccessForm = {
  title: "Or compose a note",
  helper:
    "Opens your email app with this text in the body — you can edit before sending. No data leaves this page until you send from your own client.",
  nameLabel: "Name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "Your email address",
  interestLabel: "Interest",
  interestPlaceholder: "What you are curious about or hoping to explore",
  submitLabel: "Open email draft",
  emailSubject: "Cauris Early Access Request",
};

export const demoEarlyAccessSupport = {
  title: "Early preview",
  body: "Rolling out in stages. This tour is sample UI and copy in the browser — no backend, no sign-in — so you can judge the direction on its merits.",
  tags: ["In development", "Sample UI", "Browser-only", "Early access"] as const,
};
