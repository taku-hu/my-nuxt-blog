import { shallowMount } from '@vue/test-utils'
// import { faTags } from '@fortawesome/free-solid-svg-icons'
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

  const wrapper = shallowMount(CommonTags, {
    propsData
  })
  it('props', () => {
    expect(wrapper.props()).toEqual(propsData)
  })
  // it('template', () => {
  //   expect(wrapper.html()).toContain(`<a class="bg-blue-400 rounded shadow-sm text-xs font-bold text-white p-2"><span icon="${faTags}"></span>name1</a>`)
  // })
})
