import React, { Component } from 'react'
import { Table, Input } from 'antd'
import PropTypes from 'prop-types'
import './LayerTable.less'
import blueEye from '../../static/images/blue-eye.png'
import grayEye from '../../static/images/gray-eye.png'

// 模拟数据
const mokerDataSource = [
  {
    key: 1,
    layerName: 'vniu_test_lte_weakcover_20170951m_tunnel_hr',
  },
  {
    key: 2,
    layerName: 'vniu_test_lte_sector_20170951m_cellvalue',
  },
  {
    key: 3,
    layerName: 'vniu_test_lte_avgrsrp_20171051m_grid_hw',
  },
  {
    key:4,
    layerName: 'vniu_test_lte_weakcover_20171051m_section_hw'
  }
]

let flag = true;

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
    dataIndex: 'action',
    width: 50,
    render: (text, recode) => {
      // 判断图标是睁眼还是闭眼 -.-
      let icon

      if (flag) {
        flag = !flag
        icon = blueEye
      } else {
        flag = !flag
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
        placeHolder="搜索图层名称"
        style={{
          width: 200,
          color: '#008FD4'
        }}
        onSearch={value => console.log(value)}
      />
    </div>
  )
}

// 数据源
const dataSource = mokerDataSource


class LayerTable extends Component {
  static propTypes = {

  }

  static defaultProps = {
    dataSource: []
  }

  constructor() {
    super(...arguments)

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.filterDataSource = this.filterDataSource.bind(this)

    this.state = {
      filterContent: '',
    }
  }

  handleFilterChange(text) {

  }

  // 过滤数据源
  filterDataSource() {
    const { dataSource } = this.props
    const filterContent = this.state.filterContent.trim()
    const filtedDataSource = dataSource.filter((source) => {
      return source.layerName.indexOf(filterContent) !== -1
    })
  }

  render() {
    // const { dataSource } = this.props
    const filtedDataSource = this.filterDataSource()

    return (
      <Table
        // 列设置
        columns={columns}
        // 数据源
        dataSource={filtedDataSource}
        // 是否配置边框
        // bordered={true}
        // 设置标题
        title={title}
      />
    )
  }
}

export default LayerTable
