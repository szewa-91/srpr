import { Module } from 'vuex';
import { PlayingState } from '@/store/playing/types';
import { RootState } from '@/store/types';
import { getters } from '@/store/playing/getters';
import { actions } from '@/store/playing/actions';
import { mutations } from '@/store/playing/mutations';

const namespaced: boolean = true;

const state = {
  playing: false,
  file: undefined,
  audioObject: undefined,
};
export const playing: Module<PlayingState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
