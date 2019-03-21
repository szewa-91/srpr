import { MutationTree } from 'vuex';
import { CategoriesState, Category } from './types';

export const mutations: MutationTree<CategoriesState> = {
    categoriesFetched(state, categories: Category[]) {
        state.categories = categories;
    }
};
