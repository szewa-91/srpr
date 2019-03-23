import { GetterTree } from 'vuex';
import { PlayingState } from '@/store/playing/types';
import { RootState } from '@/store/types';
import { Sound } from '../categories/types';

export const getters: GetterTree<PlayingState, RootState> = {
  playing(state): boolean {
    return state.playing;
  },
  sound(state): Sound | undefined {
    return state.sound;
  },
};
