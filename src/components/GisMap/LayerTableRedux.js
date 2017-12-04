const CHANGE_FILTER_CONTENT = 'CHANGE_FILTER_CONTENT'
const LOAD_LAYERS = 'LOAD_LAYERS'

const initialState = {
  filterContent: '',
  dataSource: [
  ]
}

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

export const changeFilter = (text) => {
  return {
    type: CHANGE_FILTER_CONTENT,
    payload: {
      filterContent: text,
    },
  }
}

export const loadLayer = () => {
  return {
    type: LOAD_LAYERS,
    payload: {
      dataSource: mokerDataSource,
    }
  }
}

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

export default reducer
