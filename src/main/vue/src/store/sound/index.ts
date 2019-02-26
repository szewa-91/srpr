import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { SoundState } from './types';
import { RootState } from '../types';

export const state: SoundState = {
    sound: undefined,
    playing: false,
};

const namespaced: boolean = true;

export const sound: Module<SoundState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};