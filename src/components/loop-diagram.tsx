const PANELS = [
  {
    src: "/__l5e/assets-v1/9e7bb188-72a2-4615-8d23-d4c6ef997941/panel1-grievance.png",
    width: 1122,
    height: 515,
    alt: "Painting of a person curled up inside a fiery red circular loop - the Grievance loop",
  },
  {
    src: "/__l5e/assets-v1/08d494cc-efcc-49bd-b76c-abd022c10e27/panel2-release.png",
    width: 1122,
    height: 460,
    alt: "Painting of a person standing outside an orange circular loop, looking at it - Release",
  },
  {
    src: "/__l5e/assets-v1/f653e1a6-7092-4476-87d4-329c6bfa44ff/panel3-productive.png",
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
            loading="lazy"
            decoding="async"
            className="h-full max-h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
