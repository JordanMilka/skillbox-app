import { setToken } from "../store/token/actions"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../store/store"
import { Action } from "redux"

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
	if (window.__token__) {
		dispatch(setToken(window.__token__))
	}
}
