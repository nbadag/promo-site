import _ from 'lodash'

import {
  MEASURE_REACT_REF,
  SET_ACTIVE_SPLASH_SECTION,
} from 'data/actions/app.js'

const initialState = {
  reactRefs: [],
  activeSplashSection: {
    id: 'SplashPage--section--Hello',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
  }
}

const reducers = {
  [MEASURE_REACT_REF]: (state, action) => {
    const { ref } = action

    return {
      ...state,
      reactRefs: [
        ..._.filter(state.reactRefs, existing => existing.id !== ref.id),
        ref,
      ]
    }
  },

  [SET_ACTIVE_SPLASH_SECTION]: (state, action) => {
    const { section } = action

    return {
      ...state,
      activeSplashSection: section,
    }
  }
}

export default {
  name: 'app',
  initialState,
  reducers,
}
