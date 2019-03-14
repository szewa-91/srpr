import { MutationTree } from 'vuex';
import { SoundState, Category } from './types';

export const mutations: MutationTree<SoundState> = {
    categoriesFetched(state, categories: Category[]) {
        state.categories = categories;
    },
    soundPlayed(state) {
        state.playing = true;
    },
    soundPaused(state) {
        state.playing = false;
    },
};
