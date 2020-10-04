import { shallowMount } from '@vue/test-utils'
// @ts-ignore
import CommonHomeCard from '@/components/commonPresentational/CommonHomeCard.vue'

describe('CommonHomeCard.vue', () => {
  const propsData = {
    cardData: {
      title: 'Sample title',
      subtitle: 'Sample sub title'
    }
  }

  it('props', () => {
    const wrapper = shallowMount(CommonHomeCard, { propsData })
    expect(wrapper.props()).toEqual(propsData)
  })
  describe('template', () => {
    it('snapshot', () => {
      const wrapper = shallowMount(CommonHomeCard, { propsData })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
