import { MutationTree } from 'vuex';
import { PlayingState } from '@/store/playing/types';


export const mutations: MutationTree<PlayingState> = {
  soundSet(state, soundFile: string) {
    if (state.audioObject) {
      state.audioObject.pause();
    }
    state.audioObject = new Audio(`/sound-files/${soundFile}`);
    state.file = soundFile;
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
