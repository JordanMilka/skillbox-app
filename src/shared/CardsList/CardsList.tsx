import React, { useEffect, useRef, useState } from "react"
import styles from "./cardslist.sass"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import axios from "axios"
import { Card } from "./Card/Card"
import { Outlet } from "react-router-dom"

interface IPostData {
	id: string
	author: string
	title: string
	rating: string
	avatar: string
	previewImg: string
	dataPostUtc: string
}

let endCounter = 0

export function CardsList() {
	const token = useSelector<RootState, string>(state => state.saveToken.token)
	const [posts, setPosts] = useState<Array<IPostData>>([])
	const [isLoading, setIsLoading] = useState(false)
	const [errorLoading, setErrorLoading] = useState("")
	const [nextAfter, setNextAfter] = useState("")
	const [isEnd, setIsEnd] = useState(false)
	const bottomOfList = useRef<HTMLDivElement>(null)

	function handleClick() {
		setIsEnd(false)
		endCounter = 0
	}

	useEffect(() => {
		if (!token || token == "undefined") {
			return
		}

		async function load() {
			endCounter++
			if (endCounter > 3) {
				return setIsEnd(true)
			}
			setIsLoading(true)
			setErrorLoading("")
			try {
				const resp = await axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
					headers: { Authorization: `Bearer ${token}` },
					params: { limit: 10, after: nextAfter },
				})
				const userData = resp.data.data.children.map((item: { data: any }) => ({
					id: item.data.id,
					author: item.data.author,
					title: item.data.title,
					rating: item.data.ups,
					avatar: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : "https://mir-avatarok.3dn.ru/_si/0/03342719.jpg",
					previewImg: item.data.preview ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, "&") : "https://media.istockphoto.com/id/943304030/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B5%D0%B9%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%82%D0%BE%D0%BD-%D0%BE%D1%88%D1%82%D1%83%D0%BA%D0%B0%D1%82%D1%83%D1%80%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D1%82%D0%B5%D0%BD%D1%8B-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.jpg?s=612x612&w=0&k=20&c=Ojyspwgzm7s2GfeBVBMeIHF_KynMSOJ-VctDhx1gSqg=",
					dataPostUtc: item.data.created_utc,
				}))
				setNextAfter(resp.data.data.after)
				setPosts(prevChildren => prevChildren.concat(...userData))
			} catch (error) {
				setErrorLoading(String(error))
			}
			setIsLoading(false)
		}

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && !isEnd) {
					load()
				}
			},
			{ rootMargin: "10px" }
		)
		if (bottomOfList.current) {
			observer.observe(bottomOfList.current)
		}

		return () => {
			if (bottomOfList.current) {
				observer.unobserve(bottomOfList.current)
			}
		}
	}, [isEnd, token, bottomOfList.current, nextAfter])

	return (
		<div className={styles.cardsList}>
			<Outlet />
			{posts.length === 0 && !isLoading && !errorLoading && <div style={{ textAlign: "center" }}>Нет ни одного поста...</div>}

			{posts.map(post => (
				<Card key={post.id} id={post.id} dataPostUtc={post.dataPostUtc} title={post.title} avatar={post.avatar} author={post.author} previewImg={post.previewImg} rating={post.rating} />
			))}

			<div ref={bottomOfList} />

			{isEnd && (
				<div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
					<button className={styles.button} onClick={handleClick}>
						Загрузить ещё
					</button>
				</div>
			)}

			{isLoading && <div style={{ textAlign: "center", marginTop: "10px" }}>Загрузка...</div>}
			{errorLoading && (
				<div role="alert" style={{ textAlign: "center" }}>
					{errorLoading}
				</div>
			)}
		</div>
	)
}
