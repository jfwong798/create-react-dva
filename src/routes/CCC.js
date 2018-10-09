import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'dva/router'

class CCC extends PureComponent {
  render() {
    return (
      <div>
        <p>CCC页</p>
        <Link to={'/aaa'}>AAA页</Link>
        <br />
        <Link to={'/aaa/bbb'}>BBB页</Link>
      </div>
    )
  }
}

CCC.propTypes = {}

export default CCC
