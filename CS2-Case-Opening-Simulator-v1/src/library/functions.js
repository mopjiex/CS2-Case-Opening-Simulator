

export const getImageUrl = (url, name) => new URL(`${url}${name}`, import.meta.url).href;

export const addRandomElement = (sourceArray, numElement) => {
    let newArray = [];
    for(let i = 0; i < numElement; i++) {
        let randomIndex = Math.floor(Math.random() * sourceArray.length);
        newArray.push(sourceArray[randomIndex]);
    }

    return newArray;
}

export const shuffleArray = arr => {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } 

    return arr;
}