import { GetterTree } from "vuex";
import { PlayingState } from "@/store/playing/types";
import { RootState } from "@/store/types";

export const getters: GetterTree<PlayingState, RootState> = {
  playing(state): boolean {
    return state.playing;
  },
  file(state): string | undefined {
    return state.file;
  }
};