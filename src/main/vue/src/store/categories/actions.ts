import { ActionTree } from 'vuex';
import { Category, CategoriesState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<CategoriesState, RootState> = {
  fetchCategories: ({ commit }) => {
    fetch('/api/categories')
        .then(res => res.json() as Promise<Category[]>)
        .then(res => commit('categoriesFetched', res))
        .catch(err => console.error(err));

  },
};
