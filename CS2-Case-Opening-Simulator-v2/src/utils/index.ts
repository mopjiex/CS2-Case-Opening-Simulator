//Методы для массива
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

//Методы цвета

const bgColorClass = (color: string): string => {
    const colors: Record<string, string> = {
        blue: "#3490dc",
        purple: "#9f7aea",
        pink: "#FFB6C1",
        red: "#e3342f",
        yellow: "#fce94f",
    };
    return colors[color];
};

const textColorClass = (color: string): string => {
    const colors: Record<string, string> = {
        blue: "text-[#3498DB]",
        purple: "text-[#9B59B6]",
        pink: "text-[#FFC0CB]",
        red: "text-[#D62246]",
        yellow: "text-[#F4D03F]",
    }
    return colors[color]
}


//Методы для калькулятора скинов

const keyCost = (skinsLength) => {
    return skinsLength * 230;
};


const skinValue = (skin) => {
    return skin.reduce(
        (s, i) => s + i.price,
        0
    );
};

const profitLoss = (price, skinsLength) => {
    return skinValue(price) - keyCost(skinsLength);
};




//Прочее

const avatars = [
    "/avatars/av-1.jpg",
    "/avatars/av-2.jpg",
    "/avatars/av-3.jpg",
    "/avatars/av-4.jpg",
    "/avatars/av-5.jpg",
    "/avatars/av-6.jpg",
    "/avatars/av-7.jpg",
    "/avatars/av-8.jpg",
    "/avatars/av-9.jpg",
    "/avatars/av-10.jpg",
];


/* 
    ЦВЕТА
    Open - #3CB371
    Open-hover - #48d889
    Close - #93A8AC

    Choose - #92A8D1
    Delete - #E74C3C
*/




export {
    shuffle, rand, pushRandomItems,
    bgColorClass, textColorClass,
    keyCost, skinValue, profitLoss,
    avatars
}