export interface Sound {
    name: string;
    category: string;
}

export interface SoundState {
    sound?: Sound;
    playing: boolean;
}
