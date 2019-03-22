import { MutationTree } from 'vuex';
import { PlayingState } from '@/store/playing/types';
import { Sound } from '../categories/types';


export const mutations: MutationTree<PlayingState> = {
  soundSet(state, sound: Sound) {
    if (state.audioObject) {
      state.audioObject.pause();
    }
    state.audioObject = new Audio(`/sound-files/${sound.soundFile}`);
    state.sound = sound;
    state.audioObject.loop = true;
    state.audioObject.play().then(_ => { state.playing = true; });
  },
  soundPlayed(state) {
    if (state.audioObject) {
      state.audioObject.play().then(_ => { state.playing = true; });
    }
  },
  soundPaused(state) {
    if (state.audioObject) {
      state.audioObject.pause();
      state.playing = false;
    }
  },
};
