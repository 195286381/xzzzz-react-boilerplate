const CHANGE_FILTER_CONTENT = 'CHANGE_FILTER_CONTENT'
const LOAD_LAYERS = 'LOAD_LAYERS'

// 初始化状态
const initialState = {
  filterContent: '',
  dataSource: [
  ]
}

// 模拟数据
const mokerDataSource = [
  {
    layerName: 'vniu_test_lte_weakcover_20170951m_tunnel_hr',
  },
  {
    layerName: 'vniu_test_lte_sector_20170951m_cellvalue',
  },
  {
    layerName: 'vniu_test_lte_avgrsrp_20171051m_grid_hw',
  },
  {
    layerName: 'vniu_test_lte_weakcover_20171051m_section_hw',
  },
]

export const changeFilter = (text) => {
  return {
    type: CHANGE_FILTER_CONTENT,
    payload: {
      filterContent: text,
    },
  }
}

// 加载图层
export const loadLayer = () => {
  let uniqueKey = 1;

  const addUniqueKey = dataSource => {
    return dataSource.map(data => {
      return {...data, key: uniqueKey++}
    })
  }
  return {
    type: LOAD_LAYERS,
    payload: {
      dataSource: addUniqueKey(mokerDataSource),
    }
  }
}

// 负责处理状态的修改
const reducer = (state = initialState, action) => {
  switch(action.type) {

    case CHANGE_FILTER_CONTENT: {
      return {
        ...state,
        filterContent: action.payload.filterContent
      }
    }

    case LOAD_LAYERS: {
      return {
        ...state,
        dataSource: {
          ...action.payload.dataSource,
          selected: false,
        }
      }
    }

    default: return state
  }
}

// 导出 reducer
export default reducer
