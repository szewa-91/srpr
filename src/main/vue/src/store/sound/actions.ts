import { ActionTree } from 'vuex';
import { SoundState, Sound } from './types';
import { RootState } from '../types';


export const actions: ActionTree<SoundState, RootState> = {
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
