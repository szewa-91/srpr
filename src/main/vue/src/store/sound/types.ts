export interface Category {
    name: string;
    icon: string;
    id: number;
    description?: string;
    background?: string;
}

export interface Sound {
    name: string;
    category: number;
    description: string;
    soundFile: string;
    background: string;
}

export interface SoundState {
    category?: Category;
    sound?: Sound;
    playing: boolean;
}
