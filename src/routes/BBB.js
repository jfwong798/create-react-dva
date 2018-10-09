import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'dva/router'
import { connect } from 'dva'
import { Menu, Row, Col, Dropdown, Button, Pagination, Calendar } from 'antd'
import { injectIntl } from 'react-intl'

@connect(({ app }) => ({
  lang: app.lang,
}))
class BBB extends PureComponent {
  changeLang = e => {
    this.props.dispatch({
      type: 'app/changeLang',
      payload: {
        lang: e.key,
      },
    })
  }

  getBtnLabel = () => {
    const { lang } = this.props
    switch (lang) {
      case 'zh_CN':
        return '中文'
        break
      case 'zh_HK':
        return '繁体'
        break
      case 'en_US':
        return '英文'
        break

      default:
        return '中文'
        break
    }
  }

  render() {
    const {
      lang,
      intl: { formatMessage },
    } = this.props

    const menu = (
      <Menu onClick={this.changeLang} selectedKeys={[lang]}>
        <Menu.Item key="zh_CN">中文</Menu.Item>
        <Menu.Item key="en_US">英文</Menu.Item>
        <Menu.Item key="zh_HK">繁体</Menu.Item>
      </Menu>
    )
    const btnLabel = this.getBtnLabel()

    return (
      <div>
        <p>BBB页</p>
        <Link to={'/aaa'}>AAA页</Link>
        <br />
        <Link to={'/ccc'}>CCC页</Link>

        <Row>
          <Col offset={2}>
            <Dropdown trigger={['click']} overlay={menu}>
              <Button>{btnLabel}</Button>
            </Dropdown>
          </Col>
          <Col span={12}>
            <p>{formatMessage({ id: 'App.username' })}</p>
            <p>{formatMessage({ id: 'App.password' })}</p>
            <div>
              <Pagination defaultCurent={1} total={20} showSizeChanger />
              <Calendar fullscreen={false} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

BBB.propTypes = {}

export default injectIntl(BBB)
