
const bgColorClass = (color: string): string => {
    // const colors: Record<string, string> = {
    //     blue: "bg-blue-600",
    //     purple: "bg-purple-600",
    //     pink: "bg-pink-600",
    //     red: "bg-red-600",
    //     yellow: "bg-yellow-600",
    // };

    // return colors[color] || '';
    if(color === 'blue') return 'bg-blue-600'
    else if(color === 'purple') return 'bg-purple-600'
    else if(color === 'pink') return 'bg-pink-600'
    else if(color === 'red') return 'bg-red-600'
    else if(color === 'yellow') return 'bg-yellow-400'
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

 const colors: Record<string, string> = {
        blue: "bg-blue-600",
        purple: "bg-purple-600",
        pink: "bg-pink-600",
        red: "bg-red-600",
        yellow: "bg-yellow-600",
    };


export { bgColorClass, textColorClass, colors }