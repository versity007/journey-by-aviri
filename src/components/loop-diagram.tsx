const INK = "#17150F";
const CREAM = "#F6F2EA";

function Panel({
  label,
  loopColor,
  textPathId,
  children,
}: {
  label: string;
  loopColor: string;
  textPathId: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full rounded-sm bg-background p-5">
        <svg
          viewBox="0 0 320 320"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id={textPathId}
              d="M 160,58 A 72,72 0 1,1 159.9,58"
              fill="none"
            />
          </defs>
          <circle
            cx="160"
            cy="130"
            r="95"
            stroke={loopColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <g
            fill={INK}
            fontSize="6.5"
            fontFamily="IBM Plex Sans, system-ui, sans-serif"
            fontWeight="500"
            opacity="0.42"
            style={{ letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            <text>
              <textPath href={`#${textPathId}`} startOffset="1%">
                Something lands wrong
              </textPath>
            </text>
            <text>
              <textPath href={`#${textPathId}`} startOffset="23%">
                →
              </textPath>
            </text>
            <text>
              <textPath href={`#${textPathId}`} startOffset="26%">
                A story forms
              </textPath>
            </text>
            <text>
              <textPath href={`#${textPathId}`} startOffset="48%">
                →
              </textPath>
            </text>
            <text>
              <textPath href={`#${textPathId}`} startOffset="51%">
                Rehearsed
              </textPath>
            </text>
            <text>
              <textPath href={`#${textPathId}`} startOffset="73%">
                →
              </textPath>
            </text>
            <text>
              <textPath href={`#${textPathId}`} startOffset="76%">
                Feels like fact
              </textPath>
            </text>
          </g>
          {children}
        </svg>
      </div>
      <div className="mt-5 font-serif text-[clamp(22px,2vw,30px)] text-dark-foreground">
        {label}
      </div>
    </div>
  );
}

function GrievanceFigure() {
  return (
    <g
      stroke={INK}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      {/* head */}
      <circle cx="160" cy="118" r="12" />
      {/* neck */}
      <path d="M160,130 L160,138" />
      {/* torso */}
      <path d="M160,138 C155,155 150,162 150,168" />
      {/* thighs */}
      <path d="M150,168 L130,168" />
      <path d="M150,168 L170,168" />
      {/* shins */}
      <path d="M130,168 L120,190" />
      <path d="M170,168 L180,190" />
      {/* arms to head */}
      <path d="M156,140 C150,145 148,150 152,116" />
      <path d="M164,140 C170,145 172,150 168,116" />
      {/* hands */}
      <circle cx="152" cy="116" r="2.4" fill={INK} stroke="none" />
      <circle cx="168" cy="116" r="2.4" fill={INK} stroke="none" />
    </g>
  );
}

function ReleaseFigure() {
  return (
    <g
      stroke={INK}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      {/* head */}
      <circle cx="285" cy="115" r="12" />
      {/* gaze toward loop */}
      <path d="M278,112 L240,120" strokeWidth="1.6" />
      {/* neck */}
      <path d="M285,127 L285,135" />
      {/* body */}
      <path d="M285,135 L285,195" />
      {/* legs */}
      <path d="M285,195 L265,245" />
      <path d="M285,195 L305,245" />
      {/* arm pointing */}
      <path d="M280,145 L240,155 L220,150" />
      {/* arm at side */}
      <path d="M290,145 L295,180" />
    </g>
  );
}

function GratitudeFigure() {
  return (
    <g
      stroke={INK}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      {/* lasso rope around the loop */}
      <path d="M95,80 C140,20 260,40 270,130 C280,220 190,250 120,220 C70,200 75,120 95,80" />
      {/* head */}
      <circle cx="45" cy="110" r="12" />
      {/* neck */}
      <path d="M45,122 L45,130" />
      {/* body */}
      <path d="M45,130 L45,190" />
      {/* legs */}
      <path d="M45,190 L25,245" />
      <path d="M45,190 L65,245" />
      {/* left arm at side */}
      <path d="M40,145 L35,180" />
      {/* right arm throwing */}
      <path d="M50,145 L75,100 L95,80" />
    </g>
  );
}

export function LoopDiagram() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <Panel label="Grievance" loopColor="#A8442A" textPathId="loop-text-grief">
        <GrievanceFigure />
      </Panel>
      <Panel label="Release" loopColor="#D17A3A" textPathId="loop-text-release">
        <ReleaseFigure />
      </Panel>
      <Panel label="Gratitude" loopColor="#4A7C59" textPathId="loop-text-gratitude">
        <GratitudeFigure />
      </Panel>
    </div>
  );
}
