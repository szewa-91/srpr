import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { PlayingState } from "@/store/playing/types";

export const actions: ActionTree<PlayingState, RootState> = {
  play({ commit }): any {
    commit('soundPlayed');
  },
  pause({ commit }): any {
    commit('soundPaused');
  },
  setSound({ commit }, soundFile: string): any {
    commit('soundSet', soundFile);
  },
};