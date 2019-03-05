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
    category: Category;
    description: string;
    icon: string;
    id: number;
    name: string;
    soundFile: string;
}

export interface SoundState {
    category?: Category;
    playing: boolean;
    sound?: Sound;
}
