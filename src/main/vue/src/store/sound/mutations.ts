import { MutationTree } from 'vuex';
import { SoundState, Sound } from './types';

export const mutations: MutationTree<SoundState> = {
    soundChosen(state, sound: Sound) {
        state.sound = sound;
    },
    soundPlayed(state) {
        state.playing = true;
    },
    soundPaused(state) {
        state.playing = false;
    },
};
