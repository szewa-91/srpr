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
        const filteredCategory = categories.find(category => category.name === categoryName);
        return filteredCategory!.sounds || [];
      }
    };
  }
};
