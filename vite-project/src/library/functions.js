

export const getImageUrl = (url, name) => new URL(`${url}${name}`, import.meta.url).href;
