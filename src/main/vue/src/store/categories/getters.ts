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
        const filteredCategories = categories.filter(category => category.name === categoryName);
        return filteredCategories.length > 0 ? filteredCategories[0].sounds : [];
      }
    }
  },
  nowPlaying(state): boolean {
    const { playing } = state;
    return playing;
  },
};
