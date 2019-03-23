export interface Category {
    background?: string;
    description?: string;
    icon: string;
    id: number;
    name: string;
    sounds: Sound[];
}

export interface Sound {
    background: string;
    description: string;
    icon: string;
    id: number;
    name: string;
    soundFile: string;
}

export interface CategoriesState {
    categories?: Category[];
}
