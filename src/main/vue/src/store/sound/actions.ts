import { ActionTree } from 'vuex';
import { SoundState, Sound, Category } from './types';
import { RootState } from '../types';


export const actions: ActionTree<SoundState, RootState> = {
  fetchCategories({ commit }): any {
    fetch('/api/categories')
      .then(res => res.json())
      .then(res => {
        const categories = stripOverhead(res).map((r: any) => {
          const category = r as Category;
          category.id = r._links.category.href.slice(-1);
          return category;
        });
        commit('categoriesFetched', categories);
      })
      .catch(err => console.error(err));

    const stripOverhead = (data: any) => (data['_embedded']['categories']);
  },
  play({ commit }): any {
    commit('soundPlayed');
  },
  pause({ commit }): any {
    commit('soundPaused');
  },
};
