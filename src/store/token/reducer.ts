import { Reducer } from "react"
import { SET_TOKEN, setTokenAction } from "./actions"

export type tokenState = {
	token: string
}

export const tokenReducer: Reducer<tokenState, setTokenAction> = (state, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return { ...state, token: action.text }
		default:
			return state
	}
}
