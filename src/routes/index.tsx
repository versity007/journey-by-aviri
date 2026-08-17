import { createFileRoute } from "@tanstack/react-router";
import heroLoop from "@/assets/hero-loop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOurneY — Seven Weeks to Remove Workplace Friction at Its Source" },
      {
        name: "description",
        content:
          "A confidential 7-session, 1-on-1 program for the one talented employee whose friction is shaping how everyone else behaves. Fixed container, no retainer.",
      },
      { property: "og:title", content: "JOurneY — Remove the Friction at Its Source" },
      {
        property: "og:description",
        content:
          "Seven sessions, seven weeks, one-on-one. For managers, founders and exec teams dealing with one difficult person.",
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
    body: "We are not excavating childhood or sitting with feelings until they soften. The work is structural: find the mechanism, watch it run, change it. Anyone who needs clinical care should have it — this is a different instrument.",
  },
  {
    label: "Not coaching on retainer",
    body: "Seven sessions, then it ends. No open-ended hourly relationship, no dependency by design. If it works, they don’t need us again for this.",
  },
  {
    label: "Not performance management",
    body: "Nothing from the sessions is reported back to you. This isn’t a paper trail, and it shouldn’t be sold to the employee as one.",
  },
  {
    label: "Not a personality transplant",
    body: "The goal was never to make someone agreeable. Disagreement is useful. Rehearsed resentment isn’t.",
  },
];

const facts = [
  ["Format", "Confidential 1-on-1"],
  ["Sessions", "7 × 1 hour, with a trained guide"],
  ["Between sessions", "~2.5 hrs of reading and reflection"],
  ["After", "Daily practice, then a review call at week 10"],
  ["Reported to you", "Nothing"],
];

const shifts = [
  ["Rehearsing", "Examining"],
  ["Prosecuting", "Understanding"],
  ["Resentment", "Gratitude"],
  ["A verdict", "A question"],
  ["Reaction", "Choice"],
];

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
        <div className="flex items-center gap-7">
          <span className="hidden text-xs font-medium uppercase tracking-[0.14em] text-subtle lg:inline">
            7 sessions · 7 weeks · 1-on-1
          </span>
          <a
            href="#talk"
            className="inline-flex h-[42px] items-center rounded-sm border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-dark-foreground"
          >
            Talk About One Person
          </a>
        </div>
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
              Talk About One Person
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
                <div
                  key={line}
                  className="border-b border-rule py-5 text-[17px] text-body"
                >
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

      <section className="border-b border-rule-invert bg-dark px-6 py-14 text-dark-foreground md:px-12">
        <div className="mx-auto grid max-w-[1440px] items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-11">
          <span className="eyebrow text-ember">A participant, after seven weeks</span>
          <blockquote className="font-serif text-[clamp(24px,2.8vw,40px)] leading-[1.14]">
            “The grievance cloud lifted. And I stopped forming new ones.”
          </blockquote>
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
            <h2 className="display mb-5 text-[clamp(32px,3.4vw,52px)] leading-[1.06]">
              What It’s Like for Them
            </h2>
            <span className="block h-px w-[52px] bg-primary" />
          </div>
          <div className="grid gap-7">
            <p className="text-xl leading-[1.65] text-ink">
              Nobody arrives here in a good mood about it. That’s fine — and it’s planned for.
            </p>
            <p className="text-[19px] leading-[1.7] text-body">
              We don’t ask anyone to be more positive, more open, or ready to grow. We start with the
              grievances exactly as they are, treated as legitimate, because they usually are. Nothing
              gets argued with in session one.
            </p>
            <p className="text-[19px] leading-[1.7] text-body">
              What changes is that they get to see the machinery from the outside for the first time.
              That’s the whole turn — and it’s a relief, not a reprimand. Most people describe the
              weight coming off before they can describe what happened.
            </p>
            <p className="text-[19px] leading-[1.7] text-body">
              Work grievances and personal ones both come along, because people don’t sort themselves
              that neatly and these patterns rarely started at the office. It stays confidential
              either way.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-surface px-6 py-20 md:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="eyebrow mb-6 text-primary">The Experience</div>
              <h2 className="display mb-8 text-[clamp(30px,3.2vw,50px)] leading-[1.06]">
                Seven sessions. Seven weeks. A follow-up three weeks later.
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
              <p className="text-[21px] leading-relaxed text-ink">
                The seven weeks are a sprint, not a subscription. A fixed beginning, a middle that
                does the work, and an end you can point to.
              </p>
              <p className="text-[19px] leading-[1.7] text-body">
                The first stretch is recognition — getting the loop out of their head and onto the
                table where it can be looked at. The middle clears what has accumulated. The last
                sessions build the replacement and rehearse it, so there’s something to run when the
                next trigger arrives.
              </p>
              <p className="text-[19px] leading-[1.7] text-body">
                Then they practice it in the world for three weeks, with ten minutes of journaling a
                day, and we review how it’s holding. A new loop is a skill; skills need reps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:py-28">
        <h2 className="display mb-5 text-[clamp(32px,3.6vw,56px)]">What Moves</h2>
        <p className="mb-16 max-w-[34em] text-lg leading-relaxed text-body">
          Not a mood change. A change in what happens the moment something lands wrong.
        </p>

        <div className="border-t border-rule">
          {shifts.map(([from, to]) => (
            <div
              key={from}
              className="grid grid-cols-[1fr_44px_1fr] items-center gap-4 border-b border-rule py-6 sm:grid-cols-[1fr_64px_1fr] sm:gap-6"
            >
              <span className="font-serif text-[clamp(22px,2.6vw,38px)] text-faint">{from}</span>
              <span className="text-center text-xl text-primary">→</span>
              <span className="font-serif text-[clamp(22px,2.6vw,38px)] text-ink">{to}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-20 md:px-12 lg:pb-28">
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
        </div>
      </section>

      <section className="bg-dark px-6 py-24 text-dark-foreground md:px-12 lg:py-30">
        <div className="mx-auto max-w-[1020px]">
          <div className="eyebrow mb-12 text-ember">What one participant experienced</div>
          <blockquote className="mb-10 font-serif text-[clamp(30px,4vw,60px)] leading-[1.12] tracking-[-0.01em]">
            “The grievance cloud lifted. And I stopped forming new ones. I feel the change in very
            real terms.”
          </blockquote>
          <div className="mb-14 text-sm font-medium uppercase tracking-[0.14em] text-dark-foreground/60">
            — Chad A.
          </div>
          <p className="max-w-[48em] border-t border-rule-invert pt-10 text-lg leading-[1.75] text-dark-foreground/70">
            He came in able to name what everyone had done to him. He left able to name what each of
            those grievances had been pointing at — and with something to do about it besides carry
            it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pt-20 md:px-12 lg:pt-24">
        <div className="grid gap-px border-y border-border bg-border lg:grid-cols-2">
          <div className="bg-background px-8 pt-10 pb-12">
            <h3 className="mb-4 font-serif text-3xl font-normal leading-[1.14]">
              You’ll know by week three.
            </h3>
            <p className="text-[17px] leading-[1.65] text-body">
              Full refund any time before Session 4, no conversation required. By then either the
              recognition has landed or it hasn’t, and we’d rather you not pay for the second half of
              something that isn’t working.
            </p>
          </div>
          <div className="bg-background px-8 pt-10 pb-12">
            <h3 className="mb-4 font-serif text-3xl font-normal leading-[1.14]">
              Start with one person.
            </h3>
            <p className="text-[17px] leading-[1.65] text-body">
              This isn’t a rollout or a workshop for the whole department. One person, seven weeks. If
              it works, you’ll know who’s next.
            </p>
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
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#talk"
            className="inline-flex h-[58px] items-center rounded-sm bg-ink px-9 text-[15px] font-medium tracking-[0.02em] text-dark-foreground transition-colors hover:bg-primary"
          >
            Talk About One Person
          </a>
          <a
            href="#experience"
            className="inline-flex h-[58px] items-center rounded-sm border border-ink px-8 text-[15px] font-medium text-ink transition-colors hover:bg-ink hover:text-dark-foreground"
          >
            See the Seven Weeks
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
