import { ActionTree } from 'vuex';
import { SoundState, Sound, Category } from './types';
import { RootState } from '../types';


export const actions: ActionTree<SoundState, RootState> = {
  fetchSounds({ commit, state }): any {
    if (state.category) {
      fetch(`/api/categories/${state.category.id}/sounds`)
        .then(res => res.json())
        .then(sounds => {
          const fetchedSounds: Sound[] = [];
          sounds.forEach((s: any) => fetchedSounds.push(s as Sound));
          commit('soundsFetched', fetchedSounds);
        });
    } else {
      console.error('Category is undefined!');
    }
  },
  setCurrentCategory({ commit }, category: Category): any {
    commit('categoryChosen', category);
  },
  setCurrentSound({ commit }, sound: Sound): any {
    commit('soundChosen', sound);
  },
  play({ commit }): any {
    commit('soundPlayed');
  },
  pause({ commit }): any {
    commit('soundPaused');
  },
};
