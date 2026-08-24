import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import heroLoop from "@/assets/hero-loop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOurneY — Stop the Loop That's Been Running Your Year" },
      {
        name: "description",
        content:
          "A confidential six-session, one-on-one program for the person carrying a grievance that keeps replaying. Seven weeks, a fixed container, nothing reported back to anyone.",
      },
      { property: "og:title", content: "JOurneY — You're Not Wrong. It's Still Running Your Year." },
      {
        property: "og:description",
        content:
          "Six sessions across seven weeks, one-on-one, for the person carrying the grievance. Confidential — nothing is reported back to anyone.",
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

const stations = [
  {
    Svg: SvgA,
    voices: [
      {
        k: "Inside it",
        lead: true,
        paras: [
          "I have the whole case. Dates, quotes, who said what and who was in the room. I can start anywhere in it and it comes out the same way. I’m not sulking and I’m not fragile — I’m right, and that’s the part that keeps getting missed.",
          "What I don’t count is what it runs on. The drive in. The shower. Two in the morning. It’s been taking that from me for months and I’ve been calling it being clear-eyed.",
        ],
      },
      {
        k: "Next to it",
        paras: [
          "I’ve started going around it. I don’t raise the thing I know will set it off, I take the smaller ask to somebody else, and I tell myself that’s just being easy to work with. I’m not the only one doing it and none of us have said so out loud.",
        ],
      },
      {
        k: "Responsible for it",
        paras: [
          "I’ve listened, I’ve defended, I’ve told myself it would settle when the quarter did. I don’t have a move left that fits inside a one-on-one — and I’m not going to pretend I can reach in and change it from where I’m standing.",
        ],
      },
    ],
  },
  {
    Svg: SvgB,
    voices: [
      {
        k: "Inside it",
        lead: true,
        paras: [
          "Six sessions. Somebody asks me for the whole thing, in order, and doesn’t argue with any of it. Nobody tells me to let it go, and nobody suggests I’m the problem.",
          "Somewhere in the telling I hear myself say the rule out loud — the rule that got broken. I’d never told anyone that rule. Including the person who broke it.",
          "That’s the first time I’m looking at the loop instead of standing in it. The relief isn’t from being agreed with. It’s from finally seeing the shape of the thing that’s been eating my year.",
        ],
      },
      {
        k: "Next to it",
        paras: [
          "What I notice first isn’t an apology. The subject comes up and nothing happens — no edge, no case reopened, no second round. I stop rehearsing my half of it on the way in.",
        ],
      },
      {
        k: "Responsible for it",
        paras: ["I stop being the sounding board. The conversations turn back into work."],
      },
    ],
  },
  {
    Svg: SvgC,
    voices: [
      {
        k: "Inside it",
        lead: true,
        paras: [
          "The loop doesn’t go away, and I wouldn’t want it gone. I get to point it. The same engine that ran the case for six months runs at something I actually want to change, and I can hear the difference in how I talk in a room.",
          "I also got the months back. That’s the part I didn’t expect — it wasn’t costing anyone else more than it was costing me.",
        ],
      },
      {
        k: "Next to it",
        paras: [
          "I bring the hard thing to them first now. Not because they’ve gone soft — because it gets solved instead of stored.",
        ],
      },
      {
        k: "Responsible for it",
        paras: ["It held past the seven weeks. What I was managing around isn’t there to manage."],
      },
    ],
  },
];

const outcomes = [
  {
    n: "01",
    title: "A different loop in place of the old one",
    body: "The grievance loop gets replaced by one you built: gratitude instead of grinding, problem-solving instead of prosecuting. Same engine, pointed somewhere useful.",
  },
  {
    n: "02",
    title: "A short list of what actually needs work",
    body: "Grievances are precise. Each one points at something specific that’s broken or unspoken — in how you communicate, what you expect, where you think the line is. You leave knowing which three or four things those are.",
  },
  {
    n: "03",
    title: "The ability to see it running in other people",
    body: "Once you can see the loop in yourself, you can see it in colleagues, clients and the people who report to you — and stop feeding it.",
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
    body: "Nothing from the sessions is reported to anyone — not your manager, not HR. If this is being handed to you as a paper trail, it’s the wrong program and we’ll say so.",
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
  ["Reported to anyone", "Nothing"],
];

const stats = [
  ["25 yrs", "Developing the underlying method"],
  ["1-on-1", "Never a workshop or a cohort"],
  ["Module 0", "Grievance is the entry point"],
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
            <span className="eyebrow text-primary">If something is still replaying</span>
          </div>

          <h1 className="display mb-6 max-w-[21em] text-[clamp(40px,4.8vw,78px)] leading-[0.99] tracking-[-0.015em]">
            You’re Not Wrong. It’s Still Running Your Year.
          </h1>
          <p className="mb-8 font-serif text-[clamp(24px,2.3vw,34px)] italic leading-[1.15] text-primary">
            Seven weeks, one-on-one, to stop the loop and get the hours back.
          </p>

          <p className="mb-6 max-w-[33em] text-[19px] leading-relaxed text-body">
            JOurneY is a confidential one-on-one program for one person. Six sessions with a trained
            guide, working on the grievances you actually have, treated as legitimate — because they
            usually are. You leave with a different response ready for the next time something lands
            wrong, and the ability to see the same loop running in the people around you.
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
                Something that keeps replaying, that you’ve stopped expecting anyone else to fix.
              </p>
            </div>
            <div>
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-faint">
                Wrong fit
              </div>
              <p className="text-base leading-[1.55] text-subtle">
                A team workshop, a performance-management paper trail, or clinical care. This isn’t
                any of those.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-7">
            <a
              href="#talk"
              className="inline-flex h-14 items-center rounded-sm bg-ink px-8 text-[15px] font-medium tracking-[0.02em] text-dark-foreground transition-colors hover:bg-primary"
            >
              Talk to Us
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
              Left alone, it stops being about the thing that happened and starts shaping how
              everyone around you behaves.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:py-28">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <h2 className="display max-w-[20em] text-[clamp(32px,3.6vw,56px)]">
            One Loop, Three Places to Be Standing
          </h2>
          <p className="max-w-[26em] text-[17px] leading-relaxed text-body">
            The same situation, from each place you can be standing in it.
          </p>
        </div>

        <div className="grid gap-24 lg:gap-32">
          {stations.map((s, i) => (
            <Fragment key={i}>
              {i === 1 && (
                <div className="flex items-center gap-5">
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                  <p className="max-w-[44em] text-center text-xs font-medium uppercase tracking-[0.18em] text-subtle">
                    None of this is a character flaw. It’s one loop, running, and everyone near it
                    has quietly rearranged themselves around it. Only one person can do anything
                    about it, and it’s the one standing inside.
                  </p>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
              )}
              <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div className="mx-auto w-full max-w-[420px]">
                  <s.Svg />
                </div>
                <div className="grid gap-9">
                  {s.voices.map((v) => (
                    <div key={v.k}>
                      <div className="label-caps mb-3 text-subtle">{v.k}</div>
                      {v.paras.map((p, pi) => (
                        <p
                          key={pi}
                          className={
                            v.lead
                              ? "mb-4 text-[19px] leading-[1.7] text-ink last:mb-0"
                              : "text-[17px] leading-[1.65] text-body"
                          }
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:py-28">
        <div className="max-w-[44em]">
          <h2 className="display mb-8 text-[clamp(32px,3.4vw,52px)] leading-[1.06]">
            Your Call, Nobody Else’s
          </h2>
          <p className="mb-6 text-[19px] leading-[1.7] text-body">
            Nobody can put you in this. A company can pay for it — plenty do — but the enrolling is
            yours, and if you don’t want the loop gone, six sessions won’t move it. That isn’t a
            policy we bolted on. It’s how the work functions.
          </p>
          <p className="text-[19px] leading-[1.7] text-body">
            Nothing from the sessions goes back to anyone. Not a summary, not a temperature check,
            not a yes or no. If somebody handed you this page, they can pay and they can wait.
            That’s the whole of what they get to do.
          </p>
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
              The method isn’t taught in a classroom sense. It’s run on your behalf by a trained
              guide, so you get the result without having to learn the instrument first.
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
                What it’s like
              </h3>
              <p className="text-[19px] leading-[1.7] text-body">
                Nobody asks you to be more positive, more open, or ready to grow. We start with your
                grievances exactly as they are, treated as legitimate, because they usually are.
              </p>
              <p className="text-[19px] leading-[1.7] text-body">
                What changes is that you get to see the machinery from the outside. Most people
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
                You stay, and it stops costing you.
              </p>
              <p className="text-base leading-relaxed text-body">
                The loop stops running and the job stops being the place where it replays. Most
                people find they have more to give than before, because it was costing them more
                than it was costing anyone else.
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
                You see clearly that this isn’t the right seat, and you go.
              </p>
              <p className="text-base leading-relaxed text-body">
                Cleanly, on your own terms, without the long resentful exit. That’s not a failure of
                the work — it’s the answer arriving in seven weeks instead of two years.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-baseline gap-4 border-t border-border pt-9">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Either way
            </span>
            <p className="min-w-[280px] flex-1 font-serif text-[clamp(24px,2.3vw,34px)] leading-[1.22]">
              The thing that’s been quietly costing you stops.
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
          You’ve Been Carrying This Long Enough.
        </h2>
        <p className="mx-auto mb-10 font-serif text-[clamp(22px,2.2vw,32px)] italic text-primary">
          Seven weeks is shorter than the last quarter you spent hoping it would settle.
        </p>
        <p className="mx-auto mb-13 max-w-[40em] text-[19px] leading-[1.65] text-body">
          Tell us what’s been replaying. If JOurneY isn’t right for you, we’ll say so — that
          conversation costs nothing and tends to clarify plenty.
        </p>
        <div className="flex justify-center">
          <a
            href="#talk"
            className="inline-flex h-[58px] items-center rounded-sm bg-ink px-9 text-[15px] font-medium tracking-[0.02em] text-dark-foreground transition-colors hover:bg-primary"
          >
            Talk to Us
          </a>
        </div>
        <p className="mx-auto mt-8 max-w-[36em] text-sm leading-relaxed text-subtle">
          Paying for someone else? You can cover it. They enroll themselves — that part isn’t yours
          to do.
        </p>
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
