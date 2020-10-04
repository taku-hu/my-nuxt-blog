import { shallowMount } from '@vue/test-utils'
// @ts-ignore
import CommonTags from '@/components/commonPresentational/CommonTags.vue'

describe('CommonHomeCard.vue', () => {
  const propsData = {
    tags: [
      {
        fields: {
          name: 'name1'
        },
        sys: {
          id: '12345'
        }
      },
      {
        fields: {
          name: 'name2'
        },
        sys: {
          id: '54321'
        }
      }
    ]
  }

  it('props', () => {
    const wrapper = shallowMount(CommonTags, {
      propsData
    })
    expect(wrapper.props()).toEqual(propsData)
  })
  describe('template', () => {
    it('snapshot', () => {
      const wrapper = shallowMount(CommonTags, {
        propsData
      })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
