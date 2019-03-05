import { ActionTree } from 'vuex';
import { SoundState, Sound, Category } from './types';
import { RootState } from '../types';


export const actions: ActionTree<SoundState, RootState> = {
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
