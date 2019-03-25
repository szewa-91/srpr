import { shallowMount } from '@vue/test-utils'
import CategoryTile from '@/components/categories/CategoryTile.vue'
import { Category } from '@/store/categories/types';

describe('CategoryTile', () => {
  it('renders a category tile', () => {
    const category: Category = { icon: 'zuk.jpg', id: 1, name: 'owady', sounds: [] };
    const wrapper = shallowMount(CategoryTile, { propsData: { imgPath: 'assets/images/zuk.jpg', category: category } });

    const img = wrapper.find('img').attributes();
    expect(img.src).toEqual('assets/images/zuk.jpg');
    expect(wrapper).toMatchSnapshot();
  })
});