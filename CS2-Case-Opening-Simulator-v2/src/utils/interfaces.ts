interface MenuItem {
    id: number,
    path: string,
    name: string,
    active: boolean,
};

interface Case {
    id: number,
    name: string,
    image: string
};


interface Skins {
    name?: string,
    image?: string,
    color?: string
};

interface SkinCase {
    id?: number,
    'case_id'?: number,
    skins?: Skins[]
}

export type {MenuItem, Case, Skins, SkinCase};



