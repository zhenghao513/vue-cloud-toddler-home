import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: {
      apply: 'Apply',
      assess: 'Assess',
      recipe: 'Recipe',
      photo: 'Photo',
      visit: 'Visit',
      course: 'Course',
      suggestion: 'Suggestion',
      clockIn: 'Clock In',
    },
    tabbar: {
      home: 'Home',
      user: 'User',
    },
    language: 'Language',
  },
  zh: {
    home: {
      apply: '报名申请',
      assess: '成长评估',
      recipe: '今日菜谱',
      photo: '精彩瞬间',
      visit: '园所参观',
      course: '特色课程',
      suggestion: '建议中心',
      clockIn: '每日签到',
    },
    tabbar: {
      home: '首页',
      user: '我',
    },
    language: '语言',
  },
}

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})

export default i18n
