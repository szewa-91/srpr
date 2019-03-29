import { GetterTree } from 'vuex';
import { CategoriesState, Category } from './types';
import { RootState } from '../types';

export const getters: GetterTree<CategoriesState, RootState> = {
  categories(state): Category[] | undefined {
    return state.categories;
  },
  getSounds(state): any {
    return (categoryName: string) => {
      const { categories } = state;
      if (categories) {
        return getSoundsByCategory(categories, categoryName);
      }
      return [];
    };
  },
  getSound(state): any {
    return (categoryName: string, soundName: string) => {
      const { categories } = state;
      if (categories) {
        const sounds = getSoundsByCategory(categories, categoryName);
        const filteredSound = sounds.find(sound => sound.name === soundName);
        return filteredSound;
      }
      return undefined;
    };
  },
};

const getSoundsByCategory = (categories: Category[], categoryName: string) => {
  const filteredCategory = categories.find(category => category.name === categoryName);
  return filteredCategory!.sounds || [];
};
