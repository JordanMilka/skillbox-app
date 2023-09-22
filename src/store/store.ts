import { ActionCreator, AnyAction, Reducer } from "redux"
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions"
import { MeState, meReducer } from "./me/reducer"
import { SET_TOKEN, setTokenAction } from "./token/actions"
import { tokenReducer, tokenState } from "./token/reducer"

export type RootState = {
	commentText: string
	saveToken: tokenState
	me: MeState
}

const initialState: RootState = {
	commentText: "Hello! ",
	saveToken: { token: "" },
	me: { loading: false, error: "", data: {} },
}

export const rootReducer: Reducer<RootState, updateCommentAction | setTokenAction | MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction> = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return { ...state, commentText: action.text }
		case SET_TOKEN:
			return { ...state, saveToken: tokenReducer(state.saveToken, action) }
		case ME_REQUEST:
		case ME_REQUEST_SUCCESS:
		case ME_REQUEST_ERROR:
			return { ...state, me: meReducer(state.me, action) }
		default:
			return state
	}
}

const UPDATE_COMMENT = "UPDATE_COMMENT"
type updateCommentAction = {
	type: typeof UPDATE_COMMENT
	text: string
}
export const updateComment: ActionCreator<AnyAction> = text => ({ type: UPDATE_COMMENT, text: text })
