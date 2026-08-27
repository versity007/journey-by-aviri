import panel1 from "@/assets/panel1-grievance.png.asset.json";
import panel2 from "@/assets/panel2-release.png.asset.json";
import panel3 from "@/assets/panel3-productive.png.asset.json";

const PANELS = [
  {
    src: panel1.url,
    width: 1122,
    height: 515,
    alt: "Painting of a person curled up inside a fiery red circular loop — the Grievance loop",
  },
  {
    src: panel2.url,
    width: 1122,
    height: 460,
    alt: "Painting of a person standing outside an orange circular loop, looking at it — Release",
  },
  {
    src: panel3.url,
    width: 1052,
    height: 1495,
    alt: "Painting of two figures lassoing a glowing green circular loop — the Productive loop",
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
            loading="lazy"
            decoding="async"
            className="h-full max-h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
