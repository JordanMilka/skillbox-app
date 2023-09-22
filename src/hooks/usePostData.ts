import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

interface IPostData {
	id: string
	author: string
	title: string
	rating: string
	avatar: string
	previewImg: string
	dataPostUtc: string
}

export function usePostData() {
	const [data, setData] = useState<Array<IPostData>>([])
	const token = useSelector<RootState, string>(state => state.saveToken.token)

	useEffect(() => {
		if (!token || token == "undefined") {
			return
		}
		axios
			.get("https://oauth.reddit.com/best.json?sr_detail=true", {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then(resp => {
				const userData = resp.data.data.children.map((item: { data: any }) => ({
					id: item.data.id,
					author: item.data.author,
					title: item.data.title,
					rating: item.data.ups,
					avatar: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
					previewImg: item.data.preview ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, "&") : "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
					dataPostUtc: item.data.created_utc,
				}))
				setData(userData)
			})
			.catch(console.log)
	}, [token])
	return [data]
}
