import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AboutView, {});

    expect(wrapper.text()).toMatch("This is an about page");
  })
});
