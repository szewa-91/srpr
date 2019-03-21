import { MutationTree } from "vuex";
import { PlayingState } from "@/store/playing/types";


export const mutations: MutationTree<PlayingState> = {
  soundSet(state, soundFile: string) {
    state.audioObject = new Audio(`/sound-files/${soundFile}`);
    state.file = soundFile;
    state.audioObject.play().then(_ => console.log('pośladki'));
    state.playing = true;
  },
  soundPlayed(state) {
    if (state.audioObject) {
      state.audioObject.play().then(_ => { state.playing = true; })
    }
  },
  soundPaused(state) {
    if (state.audioObject) {
      state.audioObject.pause();
      state.playing = false;
    }
  }
};