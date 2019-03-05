import { MutationTree } from 'vuex';
import { SoundState, Sound, Category } from './types';

export const mutations: MutationTree<SoundState> = {
    categoryChosen(state, category: Category) {
        state.category = category;
    },
    soundChosen(state, sound: Sound) {
        state.sound = sound;
    },
    soundsFetched(state, sounds: Sound[]) {
        if (state.category) {
            state.category.sounds = sounds;
        } else {
            console.error('Category undefined!');
        }
    },
    soundPlayed(state) {
        state.playing = true;
    },
    soundPaused(state) {
        state.playing = false;
    },
};
