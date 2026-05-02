export interface JournalArticle {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readingTime: string;
  date: string;
  hero: string;
  body: { type: "p" | "h2" | "pullquote"; text: string }[];
}

export const journal: JournalArticle[] = [
  {
    slug: "anatomy-of-a-desk",
    title: "Anatomy of a Desk: Designing Calm at Work",
    dek: "Six objects, one surface, and the case for treating the desk as an interior in its own right.",
    category: "Workspace",
    readingTime: "6 min read",
    date: "2026-04-12",
    hero: "anatomy-of-a-desk",
    body: [
      { type: "p", text: "A desk is not storage. It is a stage. The screen, the lamp, the notebook — every object on it is, for eight hours a day, part of the room you live in most. We treat it as an interior because that is what it is." },
      { type: "h2", text: "The case for fewer, better surfaces" },
      { type: "p", text: "When the desk has a hard, scratched, cluttered surface, the eye cannot rest, and neither can the mind. A single, generous mat in a quiet leather changes the atmosphere of the room before any other intervention does. It softens the writing of a pen, the click of a mouse, the placing-down of a coffee cup." },
      { type: "pullquote", text: "Reinventing a space is the first step to reinventing yourself." },
      { type: "h2", text: "Six objects, considered" },
      { type: "p", text: "We design in compositions, not single products. The Executive V-Cube Set was drawn as one drawing — mat, tray, coasters, tissue holder, pen holder, mobile stand — so that nothing on the desk argues with anything else. The materials, the stitch, the proportions repeat. The result is a quietness you feel rather than notice." },
      { type: "p", text: "The aim is not to look minimal. The aim is to give the things that matter — the work, the conversation, the cup of tea — the room they deserve." },
    ],
  },
  {
    slug: "why-vegan-leather",
    title: "Why We Use Vegan Leather (And What That Actually Means)",
    dek: "Material is a position. Here is ours, in plain language, without the marketing.",
    category: "Materials",
    readingTime: "5 min read",
    date: "2026-03-20",
    hero: "why-vegan-leather",
    body: [
      { type: "p", text: "Vegan leather is a material, not a slogan. We use a polyurethane-based faux leather over a fibre backing because it does, in our hands and in our customers' homes, what we need it to do: it takes a stitch cleanly, it wipes clean, it ages slowly, and it is consistent across batches." },
      { type: "h2", text: "What it is, what it isn't" },
      { type: "p", text: "It is not animal hide and it is not plastic-coated paper. It is a layered textile engineered for finish, durability and feel. We chose it after testing real leather, recycled leather, cork, jute and several plant-based alternatives across two years of production." },
      { type: "pullquote", text: "We did not pick the material that sounded best. We picked the one that lasted longest on a real desk." },
      { type: "h2", text: "What we are still working on" },
      { type: "p", text: "End-of-life is the honest gap. The material outlives most desks, but it is not yet compostable. We are following the work being done on plant-based polyurethanes and will move when the lifespan and finish meet the bar. Until then, we make objects you can keep for a decade rather than replace twice a year." },
    ],
  },
  {
    slug: "corporate-gifting-done-quietly",
    title: "Corporate Gifting, Done Quietly",
    dek: "A short note on what a good gift to a colleague, client or team actually looks like.",
    category: "Gifting",
    readingTime: "4 min read",
    date: "2026-02-08",
    hero: "corporate-gifting-done-quietly",
    body: [
      { type: "p", text: "The best corporate gifts are the ones that get used on a Tuesday. Not displayed, not photographed, not unboxed and forgotten — used, every day, on a desk that someone actually works at." },
      { type: "h2", text: "Useful, not loud" },
      { type: "p", text: "A desk mat with a stitched edge, a small valet tray for a watch and keys, a pen holder that does not rattle. These are the things people quietly notice and quietly enjoy." },
      { type: "pullquote", text: "Branding belongs on the box, not the object." },
      { type: "h2", text: "How we work with teams" },
      { type: "p", text: "We produce in our atelier in Shahpur Jat, New Delhi, in runs of 25 to 5,000. We can colour-match, deboss and pack in monogrammed sleeves, and we can ship across India in eight working days from the order being signed off. If you'd like to talk, our gifting page has a brief that takes a minute to fill in." },
    ],
  },
];

export function getArticle(slug: string): JournalArticle | undefined {
  return journal.find((a) => a.slug === slug);
}
