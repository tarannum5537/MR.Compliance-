// Blog data source.
//
// Today this returns a small local array so the /blog pages work out of the box.
// When you are ready for a CMS (Sanity), replace the bodies of getPosts() and
// getPostBySlug() with real fetch calls — the pages themselves need no changes.
//
// Example future Sanity fetch:
//
//   const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID;
//   const DATASET = import.meta.env.VITE_SANITY_DATASET;
//   const API_VERSION = import.meta.env.VITE_SANITY_API_VERSION;
//   const query = encodeURIComponent('*[_type == "post"]|order(date desc)');
//   const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${query}`;
//   const res = await fetch(url);
//   const { result } = await res.json();
//   return result;

const POSTS = [
  {
    slug: "soc-2-readiness-checklist",
    title: "A practical SOC 2 readiness checklist",
    date: "12 March 2026",
    excerpt:
      "The controls, policies and evidence auditors actually ask for — and the order to build them in.",
    body: [
      "SOC 2 readiness is less about paperwork and more about proving that the controls you claim to run actually run every day.",
      "Start with scoping: decide which Trust Services Criteria apply, then map each criterion to an owner, a control and a piece of recurring evidence.",
      "Once evidence collection is automated, the audit itself becomes a review exercise rather than a scramble.",
    ],
  },
  {
    slug: "iso-27001-in-eight-weeks",
    title: "How teams reach ISO 27001 in eight weeks",
    date: "28 February 2026",
    excerpt:
      "A realistic timeline for an ISMS build, from risk assessment to Stage 2 certification.",
    body: [
      "An eight-week ISO 27001 timeline is achievable when the risk assessment and Statement of Applicability are done first, not last.",
      "Weeks one and two cover scoping and risk. Weeks three to six cover control implementation and policy approval.",
      "The final two weeks are internal audit, management review and the Stage 1 readiness check with your certification body.",
    ],
  },
];

export async function getPosts() {
  return POSTS;
}

export async function getPostBySlug(slug) {
  return POSTS.find((post) => post.slug === slug) || null;
}
