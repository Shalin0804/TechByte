/* Original articles. T02 adds content. Shape: { slug, title, description, date, readMinutes, blocks: [{ type: "p"|"h2"|"ul", text|items }] } */
export const articles = [];

export const getArticle = (slug) => articles.find((a) => a.slug === slug);
