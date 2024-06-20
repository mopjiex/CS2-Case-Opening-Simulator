
const bgColorClass = (color: string): string => {
    const colors: Record<string, string> = {
        blue: "bg-blue-600",
        purple: "bg-purple-600",
        pink: "bg-pink-600",
        red: "bg-red-600",
        yellow: "bg-yellow-600",
    };

    return colors[color] || '';
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


export { bgColorClass, textColorClass }