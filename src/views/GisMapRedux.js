import { combineReducers } from 'redux'

import LayerTablereducer, * as LayerTabelActions from '../components/GisMap/LayerTableRedux'

const reducers = combineReducers({
  layerTabel: LayerTablereducer,
})

export default reducers

export const actions = {
  ...LayerTabelActions,
}
