import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { categories } from './categories/index';
import { playing } from './playing/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    categories,
    playing
  },
};

export default new Vuex.Store<RootState>(store);
