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


export {keyCost, skinValue, profitLoss}