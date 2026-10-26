export type Guide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  readTime: string;
  checklist: string[];
  sections: { title: string; body: string }[];
  affiliate?: { href: string; label: string; disclosure: string };
  sources?: { label: string; href: string }[];
  related?: { label: string; href: string }[];
};

export const guides: Guide[] = [
  {
    slug: "last-minute-halloween-costume-checklist",
    eyebrow: "Seasonal · Last minute",
    title: "Last-minute Halloween costume checklist",
    description: "A practical five-day plan for choosing, checking and rehearsing a costume without panic buying.",
    readTime: "8 min read",
    checklist: ["Confirm the event rules and weather", "Build around one recognisable detail", "Use items you already own first", "Check live collection or delivery timing", "Rehearse the complete outfit before the event"],
    sections: [
      { title: "Start with the deadline, not the character", body: "Write down when you must leave for the event, then reserve a separate fitting deadline at least one day earlier. If an online order cannot arrive before that fitting deadline, treat it as unavailable and switch to a local, borrowed or wardrobe-led plan." },
      { title: "Choose one strong visual signal", body: "A last-minute costume does not need ten matching pieces. Pick the colour, silhouette, prop or hairstyle that makes the idea readable, then use neutral clothes around it. This keeps the shopping list short and makes missing accessories less important." },
      { title: "Shop your wardrobe before a storefront", body: "Lay out useful base layers, shoes, jackets and accessories you already own. Borrowing or swapping a clean item can reduce cost and waste, but check fit, permission and condition just as carefully as you would with a purchase." },
      { title: "Compare the complete cost", body: "Add the costume, missing accessories, delivery, tax, makeup, batteries and any weather layer. A low headline price can become poor value when the outfit still needs several essential pieces." },
      { title: "Treat delivery estimates as uncertain", body: "Separate seller processing time from carrier transit time and allow for seasonal volume. Keep a no-delivery backup that can work even if the parcel is delayed, incomplete or unsuitable." },
      { title: "Run a twenty-minute rehearsal", body: "Wear the complete look indoors and outdoors if appropriate. Sit, walk, use stairs and test visibility, temperature, footwear and pockets. Remove or change anything sharp, unstable, restrictive or incompatible with the venue rules." },
      { title: "Keep the idea useful after Halloween", body: "Store reusable pieces clean and labelled, donate suitable items promptly or return eligible unused goods under the seller's current policy. A flexible base layer or accessory is usually more useful than a highly specific item worn once." },
      { title: "Why this guide is timely", body: "The National Retail Federation reported in September 2026 that 71% of Halloween shoppers expected to buy costumes and that value remained important. Its October trend update also found strong interest in classic, superhero and personalised costume ideas. Those figures describe the market; they do not predict any individual product's availability, price or suitability." },
    ],
    affiliate: {
      href: "https://www.kqzyfj.com/click-101845348-17267208?sid=last_minute_halloween&url=https%3A%2F%2Fabracadabranyc.com%2Fcollections%2Fcostumes",
      label: "Compare current costumes at Abracadabra NYC — affiliate link",
      disclosure: "If you buy through this sponsored link, Costume Cart Check may earn a commission at no extra cost to you. Stock, collection options, delivery dates, sizing and return eligibility can change; confirm them directly with the retailer before ordering.",
    },
    sources: [
      { label: "National Retail Federation: 2026 Halloween spending survey", href: "https://nrf.com/media-center/press-releases/nrf-halloween-survey-shows-consumer-spending-expected-to-reach-13-5-billion" },
      { label: "National Retail Federation: Top Halloween costume trends for 2026", href: "https://nrf.com/blog/top-halloween-costume-trends-for-2026" },
    ],
    related: [
      { label: "Plan a Halloween costume without the rush", href: "/halloween-costume-planning" },
      { label: "Shipping and returns: what to check", href: "/costume-shipping-returns" },
      { label: "Build a costume budget", href: "/costume-budget-guide" },
    ],
  },
  {
    slug: "costume-buying-checklist",
    eyebrow: "Start here",
    title: "The costume buying checklist",
    description: "A calm, ten-minute check before you commit to a costume online.",
    readTime: "6 min read",
    checklist: ["List every included piece", "Compare your measurements with the seller’s chart", "Read the return window", "Check the delivery estimate", "Set a total budget including accessories"],
    sections: [
      { title: "Inspect the whole listing", body: "A styled photograph may show shoes, wigs or props that are not included. Build a written list from the product description, then price any missing pieces before deciding." },
      { title: "Measure, do not guess", body: "Use a soft tape over the underclothes you expect to wear. Record chest, waist, hip, inseam and height, then compare those numbers with the retailer’s current chart." },
      { title: "Leave a delivery buffer", body: "Event dates are unforgiving. Allow time to try the costume on and correct a minor fit issue. Treat an estimate as an estimate, especially during seasonal peaks." },
    ],
    affiliate: {
      href: "https://www.kqzyfj.com/click-101845348-17267208?sid=costume_cart_check&url=https%3A%2F%2Fabracadabranyc.com%2Fcollections%2Fcostumes",
      label: "Browse costumes at Abracadabra NYC — affiliate link",
      disclosure: "If you buy through this sponsored link, Costume Cart Check may earn a commission at no extra cost to you. Verify the retailer's live price, stock, sizing, delivery and returns before ordering.",
    },
  },
  {
    slug: "costume-sizing-fit",
    eyebrow: "Fit",
    title: "Costume sizing without the guesswork",
    description: "How to measure, read a chart and choose when your measurements span sizes.",
    readTime: "7 min read",
    checklist: ["Use a flexible tape", "Measure over intended layers", "Prioritise the least flexible garment area", "Check garment—not body—measurements", "Keep packaging until fit is confirmed"],
    sections: [
      { title: "Take fresh measurements", body: "Costume sizing varies by maker. Measure for the specific purchase instead of relying on a usual clothing size." },
      { title: "Understand what the chart describes", body: "Some charts list body measurements; others list the finished garment. Look for the label and any stated stretch before comparing." },
      { title: "Plan for movement", body: "Sit, raise your arms and take a few steps during the first fitting. A costume needs enough ease for the way you will actually wear it." },
    ],
  },
  {
    slug: "wig-buying-guide",
    eyebrow: "Wigs",
    title: "A practical guide to costume wigs",
    description: "Choose fibre, cap and length with comfort and upkeep in mind.",
    readTime: "6 min read",
    checklist: ["Check adjustable cap details", "Confirm heat resistance before styling", "Budget for a wig cap", "Review colour in several images", "Store away from heat and tangles"],
    sections: [
      { title: "Start with the cap", body: "A dramatic style is not useful if the cap is uncomfortable. Check circumference guidance, adjustment straps and whether a wig cap is included." },
      { title: "Treat heat claims carefully", body: "Never apply heated tools unless the listing expressly identifies the fibre as heat-resistant and gives a safe temperature range." },
      { title: "Plan simple maintenance", body: "A wide-tooth comb, low-friction storage and patient detangling usually protect a costume wig better than aggressive brushing." },
    ],
  },
  {
    slug: "cosplay-prop-buying-guide",
    eyebrow: "Props",
    title: "Buying cosplay props responsibly",
    description: "A venue-first approach to size, materials, transport and safety.",
    readTime: "7 min read",
    checklist: ["Read the venue rules", "Check dimensions and weight", "Avoid functional weapons", "Plan secure transport", "Inspect for sharp edges"],
    sections: [
      { title: "Rules come first", body: "Convention, theatre and venue policies differ. Confirm their current prohibited-items and peace-bonding rules before purchasing or travelling." },
      { title: "Think beyond the photo", body: "A large prop has to fit through doors, travel safely and remain comfortable for hours. Compare stated dimensions with your transport and storage." },
      { title: "Make it visibly harmless", body: "Choose lightweight, blunt, non-functional designs. If a prop could be mistaken for a weapon, use extra caution and follow all local and venue requirements." },
    ],
  },
  {
    slug: "costume-makeup-safety",
    eyebrow: "Makeup",
    title: "Costume makeup: a safer pre-event check",
    description: "Simple checks for labels, patch testing, eyes, removal and shared products.",
    readTime: "6 min read",
    checklist: ["Read the full label", "Patch test in advance", "Keep unsuitable products away from eyes and lips", "Do not share applicators", "Plan gentle removal"],
    sections: [
      { title: "Use products as labelled", body: "A product sold for crafts is not automatically skin-safe. Follow its intended use, warnings and age guidance, and stop if irritation occurs." },
      { title: "Patch test early", body: "Test a small area well before the event according to the product directions. This does not guarantee a reaction will not occur, but it can reveal an obvious problem." },
      { title: "Know when to seek help", body: "Remove the product if discomfort develops. For significant swelling, breathing difficulty or another urgent reaction, seek immediate medical help." },
    ],
  },
  {
    slug: "halloween-costume-planning",
    eyebrow: "Seasonal",
    title: "Plan a Halloween costume without the rush",
    description: "A four-stage plan for concept, fit, delivery and a final dress rehearsal.",
    readTime: "5 min read",
    checklist: ["Choose the concept", "Set a full-look budget", "Order with a buffer", "Test movement and visibility", "Prepare weather layers"],
    sections: [
      { title: "Work backwards", body: "Set a try-on date before the event date. Your real deadline is the day you still have time to adjust the fit or replace a missing item." },
      { title: "Budget for the complete look", body: "Include footwear, outer layers, makeup, batteries and delivery—not just the headline costume." },
      { title: "Do a rehearsal", body: "Wear the full look for at least twenty minutes. Check visibility, temperature, footwear, pockets and anything that catches on furniture." },
    ],
  },
  {
    slug: "group-costume-guide",
    eyebrow: "Groups",
    title: "A low-stress group costume plan",
    description: "Coordinate a group without forcing one budget, body type or comfort level.",
    readTime: "5 min read",
    checklist: ["Agree one visual theme", "Set individual budgets", "Offer flexible roles", "Share deadlines", "Choose one backup plan"],
    sections: [
      { title: "Coordinate, do not duplicate", body: "A common colour, era or accessory can make a group legible without requiring everyone to buy the same outfit." },
      { title: "Design for consent and comfort", body: "Give each person control over coverage, footwear, makeup and spend. A good group concept adapts to the people in it." },
      { title: "Name a coordinator", body: "One shared checklist and one organiser reduce duplicate purchases and last-minute confusion." },
    ],
  },
  {
    slug: "costume-shipping-returns",
    eyebrow: "Delivery",
    title: "Shipping and returns: what to check",
    description: "Read the details that matter before an event deadline turns a small issue into a costly one.",
    readTime: "6 min read",
    checklist: ["Confirm destination eligibility", "Separate processing from transit time", "Read final-sale exclusions", "Keep tags and packaging", "Document the item on arrival"],
    sections: [
      { title: "Processing is not transit", body: "A dispatch estimate and a carrier journey are different stages. Consider both, plus a buffer, when judging whether an item is event-ready." },
      { title: "Read exclusions", body: "Wigs, cosmetics, undergarments, clearance items and seasonal goods may have special return conditions. Check the current policy before purchase." },
      { title: "Inspect promptly", body: "Open the parcel without damaging packaging, confirm every listed component and photograph any issue while the item is still unused." },
    ],
  },
  {
    slug: "collectibles-buying-guide",
    eyebrow: "Collectibles",
    title: "A grounded collectibles buying guide",
    description: "Buy for enjoyment while checking authenticity signals, condition and seller terms.",
    readTime: "7 min read",
    checklist: ["Identify the exact edition", "Examine condition notes", "Check seller and return terms", "Save the receipt", "Avoid treating a collectible as guaranteed investment"],
    sections: [
      { title: "Define what you are buying", body: "Edition, scale, material, packaging and included parts can change value and suitability. Match the written description to the images." },
      { title: "Keep expectations realistic", body: "Future resale value is uncertain. Buy because the item and price work for you now, not because appreciation is promised or implied." },
      { title: "Protect the record", body: "Keep the listing, receipt and photographs of the delivered condition. These are useful for your collection records and any timely seller query." },
    ],
  },
  {
    slug: "costume-budget-guide",
    eyebrow: "Budget",
    title: "Build a costume budget that includes the hidden bits",
    description: "A simple way to compare complete looks instead of misleading headline prices.",
    readTime: "5 min read",
    checklist: ["Set a hard total", "List required accessories", "Add delivery and tax", "Reserve a small contingency", "Reuse what you own"],
    sections: [
      { title: "Price the full cart", body: "The most useful comparison is the amount needed for a wearable result. Include any essential piece that the main listing treats as optional." },
      { title: "Separate needs from upgrades", body: "Mark every item essential, useful or decorative. If the total rises, remove decorative upgrades first." },
      { title: "Avoid false urgency", body: "A countdown or seasonal message should not replace your checks. Confirm the actual terms and only buy when the complete cost is acceptable." },
    ],
  },
];

export const pages = {
  "how-we-compare": {
    eyebrow: "Our method",
    title: "How we compare costume purchases",
    description: "We focus on decision quality, not manufactured hype.",
    sections: [
      { title: "The criteria", body: "We look for clear inclusions, useful sizing details, material information, delivery context, return terms and safety considerations. We do not invent scores, scarcity or hands-on testing." },
      { title: "Commercial relationships", body: "A merchant relationship does not guarantee coverage or a positive conclusion. Editorial checks come first, and paid placement is not part of this site." },
      { title: "Current commercial status", body: "Costume Cart Check participates in the Abracadabra NYC affiliate programme through CJ. Clearly labelled sponsored links may earn commission on eligible purchases, at no extra cost to the shopper." },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A better pause before checkout",
    description: "Costume Cart Check is an independent US-focused buying guide for costumes, cosplay accessories, props, wigs, makeup and collectibles.",
    sections: [
      { title: "What we do", body: "We turn scattered product details into practical checklists that help shoppers think about fit, included pieces, timing, safety and total cost." },
      { title: "What we do not do", body: "We do not claim to test products we have not handled, publish fake reviews, promise savings or present buying decisions as risk-free." },
      { title: "Who it is for", body: "Our current commercial coverage is designed for US shoppers because the approved merchant relationship is serviceable in the United States." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered plainly",
    description: "The essentials on our content, links and launch status.",
    sections: [
      { title: "Are affiliate links live?", body: "Yes. The costume buying checklist contains a clearly labelled Abracadabra NYC affiliate link generated for this site's registered CJ promotional property." },
      { title: "Do links change the price?", body: "A standard affiliate link ordinarily does not add a separate charge to a shopper. Always rely on the merchant checkout for the current total and terms." },
      { title: "Are you the retailer?", body: "No. Costume Cart Check is an independent guide. Product availability, fulfilment, returns and support are handled under the retailer’s current terms." },
      { title: "Are the guides professional advice?", body: "No. The guides are general consumer information. Follow product labels, venue rules and qualified professional advice where appropriate." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Costume Cart Check",
    description: "A privacy-minded contact route is being prepared for the public launch.",
    sections: [
      { title: "Before launch", body: "No contact form is active and this site does not ask visitors to submit personal information." },
      { title: "Corrections", body: "A dedicated contact address will be published before affiliate links go live. Until then, no response channel is represented as active." },
    ],
  },
  "affiliate-disclosure": {
    eyebrow: "Disclosure",
    title: "Affiliate disclosure",
    description: "Clear commercial context, placed where readers can see it.",
    sections: [
      { title: "Current status", body: "Costume Cart Check participates in the Abracadabra NYC affiliate programme through CJ. Some clearly labelled sponsored links may earn us a commission on eligible purchases, at no extra cost to the shopper." },
      { title: "How links are shown", body: "Affiliate links are labelled before you click, include a nearby commission disclosure and use the appropriate sponsored-link attribute." },
      { title: "Editorial independence", body: "Commercial relationships do not buy a positive recommendation. We aim to distinguish verified facts, practical judgement and any limitations in our information." },
    ],
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy notice",
    description: "A deliberately minimal-data site.",
    sections: [
      { title: "Data we request", body: "The site currently has no account, newsletter, contact form, comments or checkout, and does not intentionally ask visitors for personal information." },
      { title: "Technical records", body: "The hosting service may process basic technical logs needed to deliver and protect the site. Costume Cart Check does not currently add advertising or behavioural analytics cookies." },
      { title: "Outbound links", body: "When you follow an affiliate link, the external merchant and affiliate network may process click and transaction information under their own privacy notices." },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of use",
    description: "Straightforward limits for general buying-guide content.",
    sections: [
      { title: "Information only", body: "The site provides general consumer information, not legal, medical, financial or safety advice. Verify current product details, policies and requirements with the relevant seller or venue." },
      { title: "No guarantee", body: "We work to keep content useful, but availability, prices, sizing, delivery and merchant terms can change. We do not guarantee a particular purchase outcome." },
      { title: "Intellectual property", body: "Original site text and design belong to Costume Cart Check unless stated otherwise. Retailer names and marks belong to their respective owners." },
    ],
  },
} as const;
