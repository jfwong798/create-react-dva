import { connect } from 'dva'
import React from 'react'
import { LocaleProvider } from 'antd' //antd国际化组件
import { IntlProvider } from 'react-intl' //业务文案的国际化组件
import { ANT_LANGPACKAGE, LANGPACKAGE } from './locales'

const Locale = ({ children, lang }) => {
  return (
    <LocaleProvider locale={ANT_LANGPACKAGE[lang]}>
      <IntlProvider locale={lang} messages={LANGPACKAGE[lang]}>
        {children}
      </IntlProvider>
    </LocaleProvider>
  )
}

export default connect(({ app }) => ({
  lang: app.lang,
}))(Locale)
