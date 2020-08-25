export const MEASURE_REACT_REF = 'app.MEASURE_DOM_ELEMENT'
export const SET_ACTIVE_SPLASH_SECTION = 'app.SET_ACTIVE_SPLASH_SECTION'

export const appActions = {
  measureReactRef: (id, title, dimensions) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: MEASURE_REACT_REF,
          ref: {
            id,
            title,
            ...dimensions
          },
        })

        resolve()
      })
    }
  },

  setActiveSplashSection: (section) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: SET_ACTIVE_SPLASH_SECTION,
          section,
        })

        resolve()
      })
    }
  }
}
