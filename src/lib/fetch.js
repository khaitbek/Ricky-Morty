export const API = "https://rickandmortyapi.com/api";
export const MAX_PAGE_COUNT = 20 - 1;


export async function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => (
        `${param[0]}=${param[1]}`
    )).join("&");
    const response = await fetch(`${url}?${queryString}`);
    return await response.json();
}

export async function getCharacters(url) {
    const characters = await getFetch(url);
    return characters.json();
}