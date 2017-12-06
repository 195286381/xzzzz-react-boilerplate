import { combineReducers } from 'redux'

import LayerTablereducer, { loadLayer, } from '../components/GisMap/LayerTableRedux'

const reducers = combineReducers({
  layerTabel: LayerTablereducer,
})

export default reducers

export const actions = {
  loadLayer
}
