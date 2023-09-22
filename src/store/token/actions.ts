import { ActionCreator, AnyAction } from "redux"

export const SET_TOKEN = "SET_TOKEN"
export type setTokenAction = {
	type: typeof SET_TOKEN
	text: string
}
export const setToken: ActionCreator<AnyAction> = text => ({ type: SET_TOKEN, text: text })
