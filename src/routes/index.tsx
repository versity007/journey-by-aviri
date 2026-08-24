import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import heroLoop from "@/assets/hero-loop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOurneY — Remove Workplace Friction at Its Source in Seven Weeks" },
      {
        name: "description",
        content:
          "A confidential six-session, 1-on-1 program for the one talented employee whose friction is shaping how everyone else behaves. Fixed container, no retainer.",
      },
      { property: "og:title", content: "JOurneY — Remove the Friction at Its Source" },
      {
        property: "og:description",
        content:
          "Six sessions across seven weeks, one-on-one. For managers, founders and exec teams dealing with one difficult person.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const loopSteps = [
  { n: "01", text: "Something lands wrong." },
  { n: "02", text: "A story forms around it." },
  { n: "03", text: "The story gets rehearsed." },
  { n: "04", text: "Rehearsal makes it feel like fact." },
];

const outcomes = [
  {
    n: "01",
    title: "A different loop in place of the old one",
    body: "The grievance loop gets replaced with a productive one: gratitude instead of grinding, problem-solving instead of prosecuting. Same energy, redirected.",
  },
  {
    n: "02",
    title: "A short list of what actually needs work",
    body: "Grievances are precise. Each one points at something specific that is broken or unspoken — in how they communicate, what they expect, where they think the line is. They leave knowing which three or four things those are.",
  },
  {
    n: "03",
    title: "The ability to defuse it in other people",
    body: "Once someone can see the loop running, they can see it running in colleagues, clients, and direct reports — and stop feeding it. This is the part that changes a team, not just a person.",
  },
];

const notThis = [
  {
    label: "Not therapy",
    body: "The work is structural, not excavational: find the mechanism, watch it run, change it. Anyone who needs clinical care should have it — this is a different instrument.",
  },
  {
    label: "Not coaching on retainer",
    body: "Six sessions, then it ends. No open-ended hourly relationship and no dependency by design.",
  },
  {
    label: "Not performance management",
    body: "Nothing from the sessions is reported back to you, and it shouldn’t be sold to the employee as a paper trail.",
  },
  {
    label: "Not a personality transplant",
    body: "The goal was never to make someone agreeable. Disagreement is useful. Rehearsed resentment isn’t.",
  },
];

const facts = [
  ["Format", "Confidential 1-on-1"],
  ["Sessions", "6 × 1 hour, with a trained guide"],
  ["Before session one", "Prep week — reading and a first pass on paper"],
  ["Between sessions", "~2.5 hrs of reading and reflection"],
  ["After", "Daily practice, then a review call at week 10"],
  ["Reported to you", "Nothing"],
];

const stats = [
  ["25 yrs", "Developing the underlying method"],
  ["1-on-1", "Never a workshop or a cohort"],
  ["Module 0", "Grievance is the entry point"],
];

const threeLoops = [
  {
    Svg: SvgA,
    colorClass: "text-loop-red",
    n: "01",
    kicker: "The case",
    label: "Grievance Loop",
  },
  {
    Svg: SvgB,
    colorClass: "text-loop-amber",
    n: "02",
    kicker: "The interview",
    label: "Forgiveness Loop",
  },
  {
    Svg: SvgC,
    colorClass: "text-loop-green",
    n: "03",
    kicker: "The new loop",
    label: "Productive Loop",
  },
];

function SvgA() {
  return (
    <svg
      viewBox="0 0 420 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="h-auto w-full"
    >
      <title>Grievance loop</title>
      <desc>A person sits hunched inside a tightly coiled loop that runs on around them.</desc>
      <g fill="none" stroke="#b4451f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 172.0 145.0 Q 173.7 148.8 173.5 150.9 Q 173.3 152.9 172.1 154.8 Q 170.9 156.7 169.0 158.3 Q 167.1 159.9 164.8 161.3 Q 162.5 162.7 159.8 163.8 Q 157.1 164.9 154.0 165.4 Q 150.9 165.9 147.7 165.8 Q 144.5 165.6 141.4 165.0 Q 138.4 164.3 135.3 163.4 Q 132.3 162.5 129.1 161.4 Q 126.0 160.2 122.9 158.5 Q 119.9 156.9 117.6 154.6 Q 115.3 152.2 114.1 149.4 Q 112.8 146.7 112.6 143.7 Q 112.4 140.7 113.0 137.6 Q 113.6 134.6 115.1 131.6 Q 116.6 128.6 119.2 126.0 Q 121.8 123.3 125.4 121.3 Q 129.0 119.4 133.2 118.1 Q 137.4 116.9 141.8 116.2 Q 146.2 115.4 150.8 115.0 Q 155.4 114.6 160.3 114.8 Q 165.1 114.9 170.0 115.9 Q 174.9 116.9 179.3 118.9 Q 183.7 120.8 187.4 123.6 Q 191.2 126.3 194.2 129.6 Q 197.2 132.9 199.3 136.6 Q 201.4 140.4 202.2 144.6 Q 202.9 148.7 201.9 152.9 Q 200.9 157.0 198.3 160.8 Q 195.8 164.6 192.2 167.9 Q 188.6 171.3 184.3 174.2 Q 180.1 177.1 175.1 179.5 Q 170.2 182.0 164.4 183.6 Q 158.7 185.3 152.4 185.9 Q 146.2 186.5 139.8 186.1 Q 133.4 185.7 127.1 184.4 Q 120.7 183.1 114.6 180.9 Q 108.5 178.6 103.1 175.4 Q 97.7 172.1 93.8 167.8 Q 89.8 163.6 87.7 158.6 Q 85.6 153.7 85.2 148.5 Q 84.7 143.3 85.6 138.2 Q 86.5 133.1 88.6 128.1 Q 90.8 123.1 94.4 118.4 Q 98.0 113.8 103.1 109.8 Q 108.3 105.9 114.5 102.9 Q 120.8 99.8 127.9 97.6 Q 134.9 95.4 142.6 94.1 Q 150.3 92.7 158.5 92.6 Q 166.7 92.4 174.8 93.8 Q 182.9 95.2 190.3 98.2 Q 197.6 101.2 203.8 105.4 Q 209.9 109.7 214.7 114.8 Q 219.5 119.8 222.8 125.5 Q 226.2 131.2 227.8 137.3 Q 229.4 143.5 228.9 149.8 Q 228.4 156.1 225.8 162.1 Q 223.3 168.2 219.2 173.8 Q 215.1 179.5 209.7 184.6 Q 204.3 189.8 197.4 194.3 Q 190.5 198.8 182.2 202.0 Q 173.8 205.3 164.4 206.9 Q 155.0 208.4 145.3 208.3 Q 135.6 208.2 126.1 206.5 Q 116.5 204.8 107.6 201.8 Q 98.6 198.7 90.8 194.3 Q 82.9 189.8 76.8 184.1 Q 70.7 178.3 66.6 171.7 Q 62.6 165.0 60.6 157.9 Q 58.5 150.8 58.2 143.5 Q 57.8 136.2 59.3 128.8 Q 60.8 121.4 64.6 114.3 Q 68.4 107.2 74.5 100.8 Q 80.7 94.4 88.9 89.3 Q 97.2 84.1 106.8 80.4 Q 116.5 76.6 127.2 74.3 Q 137.9 72.0 149.2 71.4 Q 160.5 70.9 171.7 72.4 Q 182.9 73.9 193.2 77.4 Q 203.5 80.9 212.5 85.9 Q 221.5 91.0 229.0 97.2 Q 236.5 103.3 242.5 110.4 T 248.4 117.6" />
        <path d="M 248.4 117.6 C 304.4 147.6 250 244 306 248" />
      </g>
      <g fill="none" stroke="#f6f2ea" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(174,204)">
          <circle cx="-8.1" cy="-79.7" r="16.2" />
          <path d="M 5.4 -70.2 L 12.2 -63.5" />
          <path d="M 12.2 -63.5 C 17.6 -45.9 16.2 -24.3 8.1 -4.1" />
          <path d="M 8.1 -4.1 L -17.6 -4.1" />
          <path d="M -14.9 -6.8 C -27.0 -24.3 -35.1 -40.5 -37.8 -54.0" />
          <path d="M -37.8 -54.0 C -35.1 -35.1 -33.8 -17.6 -33.8 -4.1" />
          <path d="M -33.8 -4.1 L -54.0 -2.7" />
          <path d="M 10.8 -60.8 C 0.0 -44.6 -18.9 -39.2 -35.1 -44.6" />
        </g>
      </g>
      <g fill="none" stroke="#1f1c19" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(174,204)">
          <circle cx="-8.1" cy="-79.7" r="16.2" />
          <path d="M 5.4 -70.2 L 12.2 -63.5" />
          <path d="M 12.2 -63.5 C 17.6 -45.9 16.2 -24.3 8.1 -4.1" />
          <path d="M 8.1 -4.1 L -17.6 -4.1" />
          <path d="M -14.9 -6.8 C -27.0 -24.3 -35.1 -40.5 -37.8 -54.0" />
          <path d="M -37.8 -54.0 C -35.1 -35.1 -33.8 -17.6 -33.8 -4.1" />
          <path d="M -33.8 -4.1 L -54.0 -2.7" />
          <path d="M 10.8 -60.8 C 0.0 -44.6 -18.9 -39.2 -35.1 -44.6" />
        </g>
      </g>
    </svg>
  );
}

function SvgB() {
  return (
    <svg
      viewBox="0 0 420 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="h-auto w-full"
    >
      <title>Forgiveness loop</title>
      <desc>A person stands outside the same coiled loop, on the ground, facing it.</desc>
      <g fill="none" stroke="#d98324" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 172.0 145.0 Q 173.7 148.8 173.5 150.9 Q 173.3 152.9 172.1 154.8 Q 170.9 156.7 169.0 158.3 Q 167.1 159.9 164.8 161.3 Q 162.5 162.7 159.8 163.8 Q 157.1 164.9 154.0 165.4 Q 150.9 165.9 147.7 165.8 Q 144.5 165.6 141.4 165.0 Q 138.4 164.3 135.3 163.4 Q 132.3 162.5 129.1 161.4 Q 126.0 160.2 122.9 158.5 Q 119.9 156.9 117.6 154.6 Q 115.3 152.2 114.1 149.4 Q 112.8 146.7 112.6 143.7 Q 112.4 140.7 113.0 137.6 Q 113.6 134.6 115.1 131.6 Q 116.6 128.6 119.2 126.0 Q 121.8 123.3 125.4 121.3 Q 129.0 119.4 133.2 118.1 Q 137.4 116.9 141.8 116.2 Q 146.2 115.4 150.8 115.0 Q 155.4 114.6 160.3 114.8 Q 165.1 114.9 170.0 115.9 Q 174.9 116.9 179.3 118.9 Q 183.7 120.8 187.4 123.6 Q 191.2 126.3 194.2 129.6 Q 197.2 132.9 199.3 136.6 Q 201.4 140.4 202.2 144.6 Q 202.9 148.7 201.9 152.9 Q 200.9 157.0 198.3 160.8 Q 195.8 164.6 192.2 167.9 Q 188.6 171.3 184.3 174.2 Q 180.1 177.1 175.1 179.5 Q 170.2 182.0 164.4 183.6 Q 158.7 185.3 152.4 185.9 Q 146.2 186.5 139.8 186.1 Q 133.4 185.7 127.1 184.4 Q 120.7 183.1 114.6 180.9 Q 108.5 178.6 103.1 175.4 Q 97.7 172.1 93.8 167.8 Q 89.8 163.6 87.7 158.6 Q 85.6 153.7 85.2 148.5 Q 84.7 143.3 85.6 138.2 Q 86.5 133.1 88.6 128.1 Q 90.8 123.1 94.4 118.4 Q 98.0 113.8 103.1 109.8 Q 108.3 105.9 114.5 102.9 Q 120.8 99.8 127.9 97.6 Q 134.9 95.4 142.6 94.1 Q 150.3 92.7 158.5 92.6 Q 166.7 92.4 174.8 93.8 Q 182.9 95.2 190.3 98.2 Q 197.6 101.2 203.8 105.4 Q 209.9 109.7 214.7 114.8 Q 219.5 119.8 222.8 125.5 Q 226.2 131.2 227.8 137.3 Q 229.4 143.5 228.9 149.8 Q 228.4 156.1 225.8 162.1 Q 223.3 168.2 219.2 173.8 Q 215.1 179.5 209.7 184.6 Q 204.3 189.8 197.4 194.3 Q 190.5 198.8 182.2 202.0 Q 173.8 205.3 164.4 206.9 Q 155.0 208.4 145.3 208.3 Q 135.6 208.2 126.1 206.5 Q 116.5 204.8 107.6 201.8 Q 98.6 198.7 90.8 194.3 Q 82.9 189.8 76.8 184.1 Q 70.7 178.3 66.6 171.7 Q 62.6 165.0 60.6 157.9 Q 58.5 150.8 58.2 143.5 Q 57.8 136.2 59.3 128.8 Q 60.8 121.4 64.6 114.3 Q 68.4 107.2 74.5 100.8 Q 80.7 94.4 88.9 89.3 Q 97.2 84.1 106.8 80.4 Q 116.5 76.6 127.2 74.3 Q 137.9 72.0 149.2 71.4 Q 160.5 70.9 171.7 72.4 Q 182.9 73.9 193.2 77.4 Q 203.5 80.9 212.5 85.9 Q 221.5 91.0 229.0 97.2 Q 236.5 103.3 242.5 110.4 T 248.4 117.6" />
        <path d="M 248.4 117.6 C 304.4 147.6 250 244 306 248" />
      </g>
      <g fill="none" stroke="#f6f2ea" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(352,250)">
          <circle cx="0" cy="-92" r="12" />
          <path d="M 0 -80 L 0 -42" />
          <path d="M -1 -74 C -9 -64 -13 -55 -14 -45" />
          <path d="M 1 -74 C 9 -64 13 -55 14 -45" />
          <path d="M 0 -42 C -4 -28 -8 -13 -10 0" />
          <path d="M 0 -42 C 4 -28 8 -13 10 0" />
          <path d="M -17 0 L -6 0" />
          <path d="M 6 0 L 17 0" />
        </g>
      </g>
      <g fill="none" stroke="#1f1c19" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(352,250)">
          <circle cx="0" cy="-92" r="12" />
          <path d="M 0 -80 L 0 -42" />
          <path d="M -1 -74 C -9 -64 -13 -55 -14 -45" />
          <path d="M 1 -74 C 9 -64 13 -55 14 -45" />
          <path d="M 0 -42 C -4 -28 -8 -13 -10 0" />
          <path d="M 0 -42 C 4 -28 8 -13 10 0" />
          <path d="M -17 0 L -6 0" />
          <path d="M 6 0 L 17 0" />
        </g>
      </g>
    </svg>
  );
}

function SvgC() {
  return (
    <svg
      viewBox="0 0 420 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="h-auto w-full"
    >
      <title>The third loop</title>
      <desc>A person stands outside the loop and holds its line in a raised hand.</desc>
      <g fill="none" stroke="#2f7d43" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 172.0 145.0 Q 173.7 148.8 173.5 150.9 Q 173.3 152.9 172.1 154.8 Q 170.9 156.7 169.0 158.3 Q 167.1 159.9 164.8 161.3 Q 162.5 162.7 159.8 163.8 Q 157.1 164.9 154.0 165.4 Q 150.9 165.9 147.7 165.8 Q 144.5 165.6 141.4 165.0 Q 138.4 164.3 135.3 163.4 Q 132.3 162.5 129.1 161.4 Q 126.0 160.2 122.9 158.5 Q 119.9 156.9 117.6 154.6 Q 115.3 152.2 114.1 149.4 Q 112.8 146.7 112.6 143.7 Q 112.4 140.7 113.0 137.6 Q 113.6 134.6 115.1 131.6 Q 116.6 128.6 119.2 126.0 Q 121.8 123.3 125.4 121.3 Q 129.0 119.4 133.2 118.1 Q 137.4 116.9 141.8 116.2 Q 146.2 115.4 150.8 115.0 Q 155.4 114.6 160.3 114.8 Q 165.1 114.9 170.0 115.9 Q 174.9 116.9 179.3 118.9 Q 183.7 120.8 187.4 123.6 Q 191.2 126.3 194.2 129.6 Q 197.2 132.9 199.3 136.6 Q 201.4 140.4 202.2 144.6 Q 202.9 148.7 201.9 152.9 Q 200.9 157.0 198.3 160.8 Q 195.8 164.6 192.2 167.9 Q 188.6 171.3 184.3 174.2 Q 180.1 177.1 175.1 179.5 Q 170.2 182.0 164.4 183.6 Q 158.7 185.3 152.4 185.9 Q 146.2 186.5 139.8 186.1 Q 133.4 185.7 127.1 184.4 Q 120.7 183.1 114.6 180.9 Q 108.5 178.6 103.1 175.4 Q 97.7 172.1 93.8 167.8 Q 89.8 163.6 87.7 158.6 Q 85.6 153.7 85.2 148.5 Q 84.7 143.3 85.6 138.2 Q 86.5 133.1 88.6 128.1 Q 90.8 123.1 94.4 118.4 Q 98.0 113.8 103.1 109.8 Q 108.3 105.9 114.5 102.9 Q 120.8 99.8 127.9 97.6 Q 134.9 95.4 142.6 94.1 Q 150.3 92.7 158.5 92.6 Q 166.7 92.4 174.8 93.8 Q 182.9 95.2 190.3 98.2 Q 197.6 101.2 203.8 105.4 Q 209.9 109.7 214.7 114.8 Q 219.5 119.8 222.8 125.5 Q 226.2 131.2 227.8 137.3 Q 229.4 143.5 228.9 149.8 Q 228.4 156.1 225.8 162.1 Q 223.3 168.2 219.2 173.8 Q 215.1 179.5 209.7 184.6 Q 204.3 189.8 197.4 194.3 Q 190.5 198.8 182.2 202.0 Q 173.8 205.3 164.4 206.9 Q 155.0 208.4 145.3 208.3 Q 135.6 208.2 126.1 206.5 Q 116.5 204.8 107.6 201.8 Q 98.6 198.7 90.8 194.3 Q 82.9 189.8 76.8 184.1 Q 70.7 178.3 66.6 171.7 Q 62.6 165.0 60.6 157.9 Q 58.5 150.8 58.2 143.5 Q 57.8 136.2 59.3 128.8 Q 60.8 121.4 64.6 114.3 Q 68.4 107.2 74.5 100.8 Q 80.7 94.4 88.9 89.3 Q 97.2 84.1 106.8 80.4 Q 116.5 76.6 127.2 74.3 Q 137.9 72.0 149.2 71.4 Q 160.5 70.9 171.7 72.4 Q 182.9 73.9 193.2 77.4 Q 203.5 80.9 212.5 85.9 Q 221.5 91.0 229.0 97.2 Q 236.5 103.3 242.5 110.4 T 248.4 117.6" />
        <path d="M 248.4 117.6 C 294.4 91.6 318 106 380 140" />
      </g>
      <g fill="none" stroke="#f6f2ea" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(352,250)">
          <circle cx="0" cy="-92" r="12" />
          <path d="M 0 -80 L 0 -42" />
          <path d="M -1 -74 C -9 -64 -13 -55 -14 -45" />
          <path d="M 3 -74 C 16 -84 24 -96 28 -110" />
          <path d="M 0 -42 C -4 -28 -8 -13 -10 0" />
          <path d="M 0 -42 C 4 -28 8 -13 10 0" />
          <path d="M -17 0 L -6 0" />
          <path d="M 6 0 L 17 0" />
        </g>
      </g>
      <g fill="none" stroke="#1f1c19" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(352,250)">
          <circle cx="0" cy="-92" r="12" />
          <path d="M 0 -80 L 0 -42" />
          <path d="M -1 -74 C -9 -64 -13 -55 -14 -45" />
          <path d="M 3 -74 C 16 -84 24 -96 28 -110" />
          <path d="M 0 -42 C -4 -28 -8 -13 -10 0" />
          <path d="M 0 -42 C 4 -28 8 -13 10 0" />
          <path d="M -17 0 L -6 0" />
          <path d="M 6 0 L 17 0" />
        </g>
      </g>
    </svg>
  );
}


function Index() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-20 flex h-[74px] items-center justify-between gap-6 border-b border-rule bg-background/90 px-6 backdrop-blur-md md:px-12">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-[26px] tracking-[0.01em]">JOurneY</span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-subtle sm:inline">
            by Aviri
          </span>
        </div>
        <a
          href="#talk"
          className="inline-flex h-[42px] items-center rounded-sm border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-dark-foreground"
        >
          Talk to Us
        </a>
      </nav>

      <header className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pt-16 pb-20 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[72px] lg:pt-24 lg:pb-26">
        <div>
          <div className="mb-8 flex items-center gap-3.5">
            <span className="h-px w-[34px] bg-primary" />
            <span className="eyebrow text-primary">For managers, founders &amp; exec teams</span>
          </div>

          <h1 className="display mb-6 max-w-[21em] text-[clamp(40px,4.8vw,78px)] leading-[0.99] tracking-[-0.015em]">
            The Cost Isn’t One Difficult Person. It’s Everyone Working Around Them.
          </h1>
          <p className="mb-8 font-serif text-[clamp(24px,2.3vw,34px)] italic leading-[1.15] text-primary">
            Seven weeks, one-on-one, to remove the friction at its source.
          </p>

          <p className="mb-6 max-w-[33em] text-[19px] leading-relaxed text-body">
            JOurneY is a confidential program for a single employee — the talented one whose friction
            has started shaping how everyone else behaves. They leave with a different response ready
            for the next time something lands wrong, and the ability to spot the same pattern in the
            people around them.
          </p>
          <p className="mb-9 max-w-[33em] text-base leading-relaxed text-subtle">
            Not therapy. Not coaching on retainer. A fixed container with a beginning, a middle, and
            an end.
          </p>

          <div className="mb-10 grid max-w-[36em] gap-y-6 border-t border-border pt-6 sm:grid-cols-2 sm:gap-x-10">
            <div>
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Right fit
              </div>
              <p className="text-base leading-[1.55] text-body">
                A valuable person whose negativity is now affecting the team, after feedback has
                already been tried.
              </p>
            </div>
            <div>
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-faint">
                Wrong fit
              </div>
              <p className="text-base leading-[1.55] text-subtle">
                A team workshop, a performance-management paper trail, or someone who needs clinical
                care.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-7">
            <a
              href="#talk"
              className="inline-flex h-14 items-center rounded-sm bg-ink px-8 text-[15px] font-medium tracking-[0.02em] text-dark-foreground transition-colors hover:bg-primary"
            >
              Talk to Us About One Person
            </a>
            <a
              href="#experience"
              className="border-b border-border pb-1 text-[15px] font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              See how the seven weeks work
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full bg-surface">
          <img
            src={heroLoop}
            alt="Line illustration of a figure inside a looping circle with one path leading out"
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] border-t border-rule px-6 py-20 md:px-12 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <h2 className="display text-[clamp(32px,3.4vw,52px)] leading-[1.06]">
            You Already Know Who This Page Is About
          </h2>
          <div>
            <p className="mb-6 text-[22px] leading-[1.55] text-ink">
              They’re talented. You’ve defended them more than once. You don’t want to lose them.
            </p>
            <p className="mb-12 max-w-[38em] text-[19px] leading-[1.65] text-body">
              But something has hardened, and the people around them have started working around it.
            </p>

            <div className="mb-11 border-t border-rule">
              {[
                "You gave the feedback. Carefully.",
                "You asked what was really going on.",
                "You changed what was in your power to change.",
              ].map((line) => (
                <div key={line} className="border-b border-rule py-5 text-[17px] text-body">
                  {line}
                </div>
              ))}
              <div className="border-b border-rule py-5 text-[17px] font-medium text-ink">
                It held for a few weeks.
              </div>
            </div>

            <p className="max-w-[26em] font-serif text-[clamp(26px,2.4vw,36px)] leading-[1.2]">
              None of that failed because you did it badly.{" "}
              <span className="text-primary">
                It failed because the loop was never the subject of the conversation.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-6 py-20 text-dark-foreground md:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="display mb-5 max-w-[22em] text-[clamp(32px,3.6vw,56px)]">
            Grievance Is Not a Character Flaw. It’s Standard Equipment Running Badly.
          </h2>
          <p className="mb-16 max-w-[38em] text-[19px] leading-relaxed text-dark-foreground/60">
            Every human being is issued the same machinery for handling being wronged. In most people,
            most of the time, it runs unattended — and once it’s running, it keeps running.
          </p>

          <div className="grid gap-px border-y border-rule-invert bg-rule-invert sm:grid-cols-2 xl:grid-cols-4">
            {loopSteps.map((s) => (
              <div key={s.n} className="bg-dark px-7 pt-9 pb-11">
                <div className="mb-7 text-[11px] font-semibold tracking-[0.2em] text-ember">
                  {s.n}
                </div>
                <p className="font-serif text-[27px] leading-[1.22]">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-6">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-dark-foreground/50">
              and around it goes, mostly out of view
            </span>
            <span className="h-px flex-1 bg-rule-invert" />
            <span className="text-xl text-ember">↻</span>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <p className="text-[19px] leading-[1.65] text-dark-foreground/70">
              From inside the loop, it doesn’t feel like a loop. It feels like being right — which is
              exactly why feedback bounces off it.
            </p>
            <p className="font-serif text-[clamp(24px,2.2vw,32px)] leading-[1.25]">
              Left alone, one person’s loop becomes the team’s weather.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 lg:py-40">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <h2 className="display max-w-[20em] text-[clamp(32px,3.6vw,56px)]">Three Loops</h2>
          <p className="max-w-[26em] text-[17px] leading-relaxed text-body">
            The same energy, in three different relationships to it.
          </p>
        </div>

        <div className="relative">
          <span aria-hidden="true" className="absolute top-[5px] right-0 left-0 hidden h-px bg-border lg:block" />
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {threeLoops.map((l, i) => (
              <Fragment key={l.label}>
                <div className="pb-10">
                  <div
                    className={`relative mb-3 inline-block bg-background pr-5 text-[11px] font-semibold tracking-[0.22em] ${l.colorClass}`}
                  >
                    {l.n}
                  </div>
                  <div className="label-caps mb-10 text-subtle">{l.kicker}</div>
                  <div className="mb-10 min-h-[260px]">
                    <l.Svg />
                  </div>
                  <h3 className={`mb-3 font-serif text-3xl font-normal leading-[1.14] ${l.colorClass}`}>
                    {l.label}
                  </h3>
                </div>
                {i < threeLoops.length - 1 && (
                  <span aria-hidden="true" className="mx-auto block h-14 w-px bg-border lg:hidden" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:py-28">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <h2 className="display max-w-[20em] text-[clamp(32px,3.6vw,56px)]">What You Get Back</h2>
          <p className="max-w-[26em] text-[17px] leading-relaxed text-body">
            Three outcomes, in the order they tend to arrive.
          </p>
        </div>

        <div className="grid gap-px border-y border-border bg-border lg:grid-cols-3">
          {outcomes.map((o) => (
            <div key={o.n} className="bg-background px-8 pt-10 pb-12">
              <div className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-primary">
                {o.n}
              </div>
              <h3 className="mb-4 font-serif text-3xl font-normal leading-[1.14]">{o.title}</h3>
              <p className="text-[17px] leading-[1.65] text-body">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="display mb-5 text-[clamp(32px,3.4vw,52px)] leading-[1.06]">
              What This Isn’t
            </h2>
            <span className="block h-px w-[52px] bg-primary" />
          </div>
          <div className="border-t border-border">
            {notThis.map((item) => (
              <div
                key={item.label}
                className="grid gap-4 border-b border-border py-7 sm:grid-cols-[0.5fr_1fr] sm:gap-8"
              >
                <span className="font-serif text-[26px] leading-[1.15] text-faint">
                  {item.label}
                </span>
                <p className="text-[17px] leading-[1.65] text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="eyebrow mb-6 text-primary">Where This Comes From</div>
            <h2 className="display mb-5 text-[clamp(32px,3.4vw,52px)] leading-[1.06]">
              Twenty-Five Years of Method, Pointed at One Loop
            </h2>
            <span className="block h-px w-[52px] bg-primary" />
          </div>
          <div className="grid gap-7">
            <p className="text-[21px] leading-[1.6] text-ink">
              JOurneY is the work of Bijoy Goswami and Aviri, built on a model-based method developed
              over twenty-five years.
            </p>
            <p className="text-[19px] leading-[1.7] text-body">
              Grievance is where we start because it’s where the cost shows up first. In the larger
              body of work it’s Module 0 — an entry point, not the whole map. What sits behind it is a
              way of seeing patterns that people can keep using long after these weeks end.
            </p>
            <p className="text-[19px] leading-[1.7] text-body">
              The method isn’t taught in a classroom sense. It’s run on the participant’s behalf by a
              trained guide, so they get the result without having to first learn the instrument.
            </p>

            <div className="mt-3 grid gap-px border-y border-border bg-border sm:grid-cols-3">
              {stats.map(([n, label]) => (
                <div key={n} className="bg-background px-6 py-8">
                  <div className="mb-2 font-serif text-[clamp(30px,3vw,44px)] leading-none text-primary">
                    {n}
                  </div>
                  <div className="text-[13px] leading-[1.5] text-subtle">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-surface px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="eyebrow mb-6 text-primary">The Experience</div>
              <h2 className="display mb-8 text-[clamp(30px,3.2vw,50px)] leading-[1.06]">
                Six sessions across seven weeks. A follow-up three weeks later.
              </h2>
              <div className="border-t border-border">
                {facts.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-5 border-b border-border py-[18px]"
                  >
                    <span className="label-caps text-subtle">{k}</span>
                    <span className="text-right text-base">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-7">
              <h3 className="font-serif text-[clamp(24px,2.2vw,32px)] leading-[1.2]">
                What it’s like for them
              </h3>
              <p className="text-[19px] leading-[1.7] text-body">
                Nobody is asked to be more positive, more open, or ready to grow. We start with the
                grievances exactly as they are, treated as legitimate, because they usually are.
              </p>
              <p className="text-[19px] leading-[1.7] text-body">
                What changes is that they get to see the machinery from the outside. Most people
                describe the weight coming off before they can describe why.
              </p>
              <p className="text-[19px] leading-[1.7] text-body">
                Work grievances and personal ones both come up, because people don’t sort themselves
                that neatly. It stays confidential either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:py-28">
        <div className="border border-border px-8 py-14 md:px-16 md:py-18">
          <h2 className="display mb-5 max-w-[22em] text-[clamp(28px,3vw,46px)] leading-[1.06]">
            Two Honest Outcomes
          </h2>
          <p className="mb-12 max-w-[38em] text-lg text-body">
            We won’t promise you the first one. We will promise you one of them, which is more than
            the current situation is offering.
          </p>

          <div className="mb-13 grid items-stretch gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div className="bg-surface px-8 py-10">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Most often
              </div>
              <p className="mb-4 font-serif text-[clamp(24px,2.2vw,32px)] leading-[1.2]">
                They stay, and the weather changes.
              </p>
              <p className="text-base leading-relaxed text-body">
                The person you hired is still in there. Once the loop stops running, they come back —
                usually with more to give than before, because it was costing them more than it was
                costing you.
              </p>
            </div>
            <div className="flex items-center text-sm font-medium uppercase tracking-[0.16em] text-faint">
              or
            </div>
            <div className="bg-surface px-8 py-10">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Sometimes
              </div>
              <p className="mb-4 font-serif text-[clamp(24px,2.2vw,32px)] leading-[1.2]">
                They see clearly that this isn’t the right seat, and they go.
              </p>
              <p className="text-base leading-relaxed text-body">
                Cleanly, on their own terms, without the long resentful exit. That’s not a failure of
                the work — it’s the answer arriving in seven weeks instead of two years.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-baseline gap-4 border-t border-border pt-9">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Either way
            </span>
            <p className="min-w-[280px] flex-1 font-serif text-[clamp(24px,2.3vw,34px)] leading-[1.22]">
              The thing that has been quietly costing you both stops.
            </p>
          </div>

          <p className="mt-9 max-w-[40em] text-[17px] leading-[1.65] text-body">
            Full refund any time before Session 4, no conversation required.
          </p>
        </div>
      </section>

      <section className="bg-dark px-6 py-20 text-dark-foreground md:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-px border-y border-rule-invert bg-rule-invert lg:grid-cols-2">
          <div className="bg-dark px-8 py-12 md:px-12">
            <div className="eyebrow mb-10 text-ember">The participant</div>
            <blockquote className="mb-8 font-serif text-[clamp(26px,2.9vw,44px)] leading-[1.14] tracking-[-0.01em]">
              “The grievance cloud lifted. And I stopped forming new ones. I feel the change in very
              real terms.”
            </blockquote>
            <div className="text-sm font-medium uppercase tracking-[0.14em] text-dark-foreground/60">
              — Chad A.
            </div>
          </div>
          <div className="bg-dark px-8 py-12 md:px-12">
            <div className="eyebrow mb-10 text-dark-foreground/40">The manager</div>
            <blockquote className="mb-8 font-serif text-[clamp(20px,1.9vw,26px)] leading-[1.3] tracking-[-0.01em]">
              <p className="mb-6 text-dark-foreground/90">
                “One of our top leaders had been in a foul mood for months. I spent a lot of time sitting
                with him and listening as he developed a growing list of grievances both at home and at
                work. I wanted to help, but ultimately, the best I could do was be a sounding board.
              </p>
              <p className="mb-6 text-dark-foreground/90">
                When I learned about Aviri’s JOurneY of Grievance Experience, I thought it might be worth
                a try. My colleague agreed to enroll in the coursework and before long, I began noticing a
                positive shift in his mood, his approach to life, and, perhaps most importantly, his sense
                of accountability.
              </p>
              <p className="text-dark-foreground/90">
                After he completed the coursework, we both saw enough value in the experience that we
                decided to continue working with Bijoy together, this time as a team of three.”
              </p>
            </blockquote>
            <div className="text-sm font-medium uppercase tracking-[0.14em] text-dark-foreground/40">
              — Steve G.
            </div>
          </div>
        </div>
      </section>

      <section
        id="talk"
        className="mx-auto max-w-[1440px] px-6 py-20 text-center md:px-12 lg:py-28"
      >
        <h2 className="display mx-auto mb-5 max-w-[20em] text-[clamp(34px,4.4vw,72px)] leading-[1.02] tracking-[-0.015em]">
          You’ve Been Managing Around This Long Enough.
        </h2>
        <p className="mx-auto mb-10 font-serif text-[clamp(22px,2.2vw,32px)] italic text-primary">
          Seven weeks is shorter than the last quarter you spent hoping it would settle.
        </p>
        <p className="mx-auto mb-13 max-w-[40em] text-[19px] leading-[1.65] text-body">
          Tell us what’s happening with the person you had in mind when you started reading. If
          JOurneY isn’t right for them, we’ll say so — that conversation costs nothing and tends to
          clarify plenty.
        </p>
        <div className="flex justify-center">
          <a
            href="#talk"
            className="inline-flex h-[58px] items-center rounded-sm bg-ink px-9 text-[15px] font-medium tracking-[0.02em] text-dark-foreground transition-colors hover:bg-primary"
          >
            Talk to Us About One Person
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-6 border-t border-rule px-6 py-10 md:px-12">
        <span className="text-[13px] text-subtle">© Aviri 2026 · Software for Humans™</span>
        <span className="text-[13px] text-subtle">
          JOurneY of Grievance, Forgiveness &amp; Gratitude
        </span>
      </footer>
    </div>
  );
}
