import React, { Component } from 'react'
import { Table, Input } from 'antd'
import PropTypes from 'prop-types'
import './LayerTable.less'

import blueEye from '../../static/images/blue-eye.png'
import grayEye from '../../static/images/gray-eye.png'

// 显示的列
const columns = [
  {
    title: '图层名',
    dataIndex: 'layerName',
    key: 'layerName',
    className: 'layer-table-column'
  },
  {
    title: '操作',
    dataIndex: 'selected',
    width: 50,
    render: (text, recode) => {
      debugger;
      let icon
      if (text) {
        icon = blueEye
      } else {
        icon = grayEye
      }

      return (
        <img className="layer-operator-button" src={icon} />
       )
    },
    // 设置 className, 给操作列定义样式.
    className: 'layer-table-column-operator'
  },
]

const Search = Input.Search
// 显示的标题行(带搜索功能)
const title = () => {
  return (
    <div className="layer-table-title">
      {/* 左侧字体 */}
      <span>已部署图层</span>
      {/* 右侧搜索功能 */}
      <Search
        placeholder="搜索图层名称"
        style={{
          width: 200,
          color: '#008FD4'
        }}
        onSearch={value => {
          debugger;
          this.setState({
            filterContent: value,
          })
        }}
      />
    </div>
  )
}

class LayerTable extends Component {
  static propTypes = {
    dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
    // handleFilterChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    dataSource: [],
    // handleOperator: () => {},
  }

  constructor() {
    super(...arguments)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    // this.filterDataSource = this.filterDataSource.bind(this)
    this.state = {
      filterContent: '',
    }
  }

  handleFilterChange() {
    const { dataSource } = this.props
    const filterContent = this.state.filterContent.trim()

    const filtedDataSource = dataSource.filter((source) => {
      return source.layerName.indexOf(filterContent) !== -1
    })
    return filtedDataSource
  }

  render() {
    // const { dataSource } = this.props
    const { selectLayer } = this.props
    debugger;
    const filtedDataSource = this.handleFilterChange()
    return (
      <Table
        // 列设置
        columns={
          [
            {
              title: '图层名',
              dataIndex: 'layerName',
              key: 'layerName',
              className: 'layer-table-column'
            },
            {
              title: '操作',
              dataIndex: 'selected',
              width: 50,
              render: (text, recode) => {
                debugger;
                let icon
                if (text) {
                  icon = blueEye
                } else {
                  icon = grayEye
                }

                return (
                  <img className="layer-operator-button" src={icon} onClick={() => {selectLayer(recode.key)}}/>
                 )
              },
              // 设置 className, 给操作列定义样式.
              className: 'layer-table-column-operator'
            },
          ]
        }
        // 数据源
        dataSource={filtedDataSource}
        // 设置标题
        title={() => {
          return (
            <div className="layer-table-title">
              {/* 左侧字体 */}
              <span>已部署图层</span>
              {/* 右侧搜索功能 */}
              <Search
                placeholder="搜索图层名称"
                style={{
                  width: 200,
                  color: '#008FD4'
                }}
                onSearch={value => {
                  debugger;
                  this.setState({
                    filterContent: value,
                  })
                }}
              />
            </div>
          )
        }}
      />
    )
  }
}

export default LayerTable
