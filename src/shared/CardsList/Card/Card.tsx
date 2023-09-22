import React from "react"
import styles from "./card.sass"
import { Menu } from "./Menu"
import { Controls } from "./Controls"
import { Content } from "./Content"
import { Preview } from "./Preview"

interface ICardProps {
	id: string
	author: string
	title: string
	rating: string
	avatar: string
	previewImg: string
	dataPostUtc: string
}

export function Card({ id, dataPostUtc, title, avatar, author, previewImg, rating }: ICardProps) {
	return (
		<li className={styles.card}>
			<Content postID={id} dataPostUtc={dataPostUtc} title={title} avatar={avatar} author={author} />

			<Preview previewImg={previewImg} />

			<Menu postID={id} />

			<Controls rating={rating} />
		</li>
	)
}
