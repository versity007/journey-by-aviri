import grievanceImg from "@/assets/12-2-panel2-release-portrait.png";
import releaseImg from "@/assets/13-2-3-panel3-productive-portrait.png";
import productiveImg from "@/assets/14-3-1-panel1-grievance-portrait.png";

const PANELS = [
  {
    src: grievanceImg,
    width: 987,
    height: 1402,
    alt: "Painting of a person curled up inside a fiery red circular loop - the Grievance loop",
  },
  {
    src: releaseImg,
    width: 987,
    height: 1402,
    alt: "Painting of a person standing outside an orange circular loop, looking at it - Release",
  },
  {
    src: productiveImg,
    width: 987,
    height: 1402,
    alt: "Painting of a person lassoing a glowing orange circular loop - the Productive loop",
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
