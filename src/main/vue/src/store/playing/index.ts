import { Module } from "vuex";
import { SoundState } from "@/store/categories/types";
import { RootState } from "@/store/types";
import { getters } from "@/store/categories/getters";
import { actions } from "@/store/categories/actions";
import { mutations } from "@/store/categories/mutations";
import { state } from "@/store/categories";



const namespaced: boolean = true;

export const categories: Module<SoundState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
