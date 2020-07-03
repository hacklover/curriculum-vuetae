import Vue from 'vue'
import VueI18n from 'vue-i18n'
import curriculumConfig from '../../cv.config'
Vue.use(VueI18n)

const messages = {}

curriculumConfig.locale.list.forEach(locale => {
  messages[locale] = require(`../locales/${locale}.json`)
})

const i18n = new VueI18n({
  locale: curriculumConfig.locale.current,
  messages
})

export default i18n