export async  function getFetch(url){
    return await (await fetch(`${url}`)).json();
}

export async function getCharacters(url){
    const characters = await getFetch(url);
    return characters;
}