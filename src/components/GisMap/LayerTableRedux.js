const SELECTE_LAYER = 'SELECTE_LAYER'
const LOAD_LAYERS = 'LOAD_LAYERS'
// 初始化状态
const initialState = {
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

export const selectLayer = (key) => {
  return {
    type: SELECTE_LAYER,
    payload: {
      key,
    },
  }
}

// 加载图层
export const loadLayer = () => {
  let uniqueKey = 1;8

  const addUniqueKey = dataSource => {
    return dataSource.map(data => {
      return {...data, key: uniqueKey++, selected: false}
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

    case SELECTE_LAYER: {
      return {
        dataSource: [
          ...state.dataSource.map(data => {
            if (data.key === action.payload.key) {
              return {
                ...data,
                selected: !data.selected,
              }
            } else {
              return data
            }
          })
        ]
      }
    }

    case LOAD_LAYERS: {
      return {
        dataSource: [
          ...action.payload.dataSource,
        ],
      }
    }
    default: return state
  }
}

// 导出 reducer
export default reducer
