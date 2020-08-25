import _ from 'lodash'
import app from './app'

const services = {
  app,
}

export default function reducers (state, action) {
  return _.mapValues(services, (service) => {
    return service.reducers[action.type]
      ? service.reducers[action.type](state[service.name], action)
      : (state && state[service.name]) || service.initialState
  })
}
