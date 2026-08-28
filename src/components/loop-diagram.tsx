import grievanceImg from "@/assets/2-2-panel2-release-portrait.png";
import releaseImg from "@/assets/6-2-3-panel3-productive-portrait.png";
import empoweredImg from "@/assets/4-3-1-panel1-grievance-portrait.png";

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
    alt: "Painting of a person crouched outside a fiery circular loop, reaching in - the Release loop",
  },
  {
    src: empoweredImg,
    width: 987,
    height: 1402,
    alt: "Painting of a person standing on a fiery circular loop, swinging a rope lasso - the Empowered loop",
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
