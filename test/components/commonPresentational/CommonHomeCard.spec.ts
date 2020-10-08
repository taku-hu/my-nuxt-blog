import { shallowMount } from '@vue/test-utils'
// @ts-ignore
import CommonHomeCard from '@/components/commonPresentational/CommonHomeCard.vue'

describe('CommonHomeCard.vue', () => {
  const propsData = {
    cardData: {
      title: 'Sample title',
      subtitle: 'Sample subtitle'
    }
  }

  const wrapper = shallowMount(CommonHomeCard, { propsData })
  it('props', () => {
    expect(wrapper.props()).toEqual(propsData)
  })
  it('template', () => {
    expect(wrapper.html()).toContain('<h3 class="text-3xl font-bold">Sample title</h3>')
    expect(wrapper.html()).toContain('<p class="text-xl font-bold text-gray-600">Sample subtitle</p>')
  })
})
