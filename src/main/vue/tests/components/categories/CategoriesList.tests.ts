import { createLocalVue, shallowMount } from '@vue/test-utils'
import CategoriesList from '@/components/categories/CategoriesList.vue'
import { Category } from '@/store/categories/types';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const CATEGORY: Category = { icon: 'zuk.jpg', id: 1, name: 'owady', sounds: [] };

describe('CategoriesList', () => {

  let fetchCategories: any;
  let categories: any;
  let store: any;

  beforeEach(() => {
    fetchCategories = jest.fn();
    categories = jest.fn();
    store = new Vuex.Store({
      actions: {
        fetchCategories,
      },
      getters: {
        categories: () => [CATEGORY]
      }
    });
  });

  it('renders a category tile', () => {
    const wrapper = shallowMount(CategoriesList, { store, localVue});

    expect(fetchCategories).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  })
});