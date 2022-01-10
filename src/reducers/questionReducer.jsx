import { LOADED_FAILURE, LOADED_SUCCESS, LOADING } from "../types/questionType"

export const initialState = {
  loading: false,
  hasErrors: false,
  questions: [],
  question: {},
  favorites: [],
  redirect: null
}

export function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case LOADED_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        hasErrors: false
      }
    case LOADED_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      }
    default:
      return state
  }
}