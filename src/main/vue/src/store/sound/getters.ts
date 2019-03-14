import { GetterTree } from 'vuex';
import { SoundState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<SoundState, RootState> = {
    categories(state): any {
        const { categories } = state;
        return categories;
    },
    sounds(state, categoryId): any {
        // TODO: get sounds of a specific category
        return [];
    },
    nowPlaying(state): boolean {
        const { playing } = state;
        return playing;
    },
};
