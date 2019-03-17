import { ActionTree } from 'vuex';
import { Category, SoundState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<SoundState, RootState> = {
  fetchCategories: ({ commit }) => {
    fetch('/api/categories')
        .then(res => res.json() as Promise<Category[]>)
        .then(res => {
          const categories = stripOverhead(res).map((r: any) => r as Category);
          commit('categoriesFetched', categories);
        })
        .catch(err => console.error(err));

    const stripOverhead = (data: any) => (data);
  },
  play({ commit }): any {
    commit('soundPlayed');
  },
  pause({ commit }): any {
    commit('soundPaused');
  },
};