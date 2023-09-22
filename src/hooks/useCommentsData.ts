import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

interface ICommentData {
	id: string
	author: string
	text: string
	rating: string
	dataCommentUtc: string
}

export function useCommentsData(id?: string) {
	const [data, setData] = useState<Array<ICommentData>>([])
	const token = useSelector<RootState, string>(state => state.saveToken.token)

	useEffect(() => {
		if (!token || token == "undefined") {
			return
		}
		axios
			.get(`https://oauth.reddit.com/comments/${id}`, {
				headers: { Authorization: `bearer ${token}` },
			})
			.then(resp => {
				const commentData = resp.data[1].data.children.map((item: { data: any }) => ({
					id: item.data.id,
					author: item.data.author,
					text: item.data.body,
					rating: item.data.ups,
					dataCommentUtc: item.data.created_utc,
				}))
				setData(commentData)
			})
			.catch(console.log)
	}, [token])
	return [data]
}
