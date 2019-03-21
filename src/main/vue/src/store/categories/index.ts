import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { CategoriesState } from './types';
import { RootState } from '../types';

export const state: CategoriesState = {
    categories: undefined,
};

const namespaced: boolean = true;

export const categories: Module<CategoriesState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
