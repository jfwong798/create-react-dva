import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'dva/router'
import { Button } from 'antd'
import './AAA.less'

class AAA extends PureComponent {
  render() {
    return (
      <div className="textCenter">
        <p>AAA页</p>
        <Link to={'/aaa/bbb'}>
          <Button type={'primary'} icon={'link'}>
            BBB页
          </Button>
        </Link>
        <br />
        <Link to={'/ccc'}>
          <Button type={'default'} icon={'enter'}>
            CCC页
          </Button>
        </Link>
      </div>
    )
  }
}

AAA.propTypes = {}

export default AAA
