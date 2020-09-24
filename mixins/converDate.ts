import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

export default Vue.extend({
  methods: {
    convertDate: (date: string):string => dayjs(date).format('YYYY年 M月 D日')
  }
})
