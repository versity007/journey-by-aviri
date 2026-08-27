import panel1 from "@/assets/panel1-grievance.png.asset.json";
import panel2 from "@/assets/panel2-release.png.asset.json";
import panel3 from "@/assets/panel3-productive.png.asset.json";

const PANELS = [
  {
    src: panel1.url,
    alt: "Painting of a person curled up inside a fiery red circular loop — the Grievance loop",
  },
  {
    src: panel2.url,
    alt: "Painting of a person standing outside an orange circular loop, looking at it — Release",
  },
  {
    src: panel3.url,
    alt: "Painting of a person lassoing a green circular loop — Productive",
  },
];

export function LoopDiagram() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {PANELS.map((p) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          width={1122}
          height={453}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-[10px] object-cover"
          style={{ aspectRatio: "1122 / 453" }}
        />
      ))}
    </div>
  );
}
