import { GetterTree } from 'vuex';
import { SoundState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<SoundState, RootState> = {
  categories(state): any {
    return state.categories;
  },
  getSounds(state): any {
    return (categoryName: string) => {
      const { categories } = state;
      if (categories) {
        const filteredCategory = categories.find(category => category.name === categoryName);
        return filteredCategory!.sounds || [];
      }
    };
  },
  nowPlaying(state): boolean {
    const { playing } = state;
    return playing;
  },
};
