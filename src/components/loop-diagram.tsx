import panel1 from "@/assets/1-panel1-grievance-portrait.png";
import panel2 from "@/assets/2-panel2-release-portrait.png";
import panel3 from "@/assets/5-panel3-loop.png";

const PANELS = [
  {
    src: panel1,
    width: 987,
    height: 1402,
    alt: "Painting of a person curled up inside a fiery red circular loop - the Grievance loop",
  },
  {
    src: panel2,
    width: 987,
    height: 1402,
    alt: "Painting of a person standing outside an orange circular loop, looking at it - Release",
  },
  {
    src: panel3,
    width: 1052,
    height: 1495,
    alt: "Painting of two figures lassoing a glowing green circular loop - the Productive loop",
  },
];

export function LoopDiagram() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-3">
      {PANELS.map((p) => (
        <div
          key={p.src}
          className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-[10px] md:min-h-[320px]"
          style={{ backgroundColor: "#2b0701" }}
        >
          <img
            src={p.src}
            alt={p.alt}
            width={p.width}
            height={p.height}
            loading="eager"
            decoding="async"
            className="h-full max-h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
