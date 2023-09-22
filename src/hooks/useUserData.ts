import { useEffect } from "react"
import { RootState } from "../store/store"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { IUserData, meRequestAsync } from "../store/me/actions"

export function useUserData() {
	const data = useSelector<RootState, IUserData>(state => state.me.data)
	const loading = useSelector<RootState, boolean>(state => state.me.loading)
	const token = useSelector<RootState, string>(state => state.saveToken.token)
	const dispatch = useDispatch<any>()

	useEffect(() => {
		if (!token || token == "undefined") {
			return
		}
		dispatch(meRequestAsync())
	}, [token])
	return { data, loading }
}
