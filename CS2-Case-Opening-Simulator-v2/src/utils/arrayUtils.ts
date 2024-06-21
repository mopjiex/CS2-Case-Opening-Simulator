const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}

const rand = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const pushRandomItems = (arr, count) => {
    for (let i = 0; i < count; i++) {
        arr.push(arr[rand(0, arr.length - 1)]);
    }

    return arr;
}

export { shuffle, rand, pushRandomItems }