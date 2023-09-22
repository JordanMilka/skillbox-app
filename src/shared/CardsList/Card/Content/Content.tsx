import React from "react"
import styles from "./content.sass"
import { CardData } from "./CardData"
import { Link, Route } from "react-router-dom"
import { Post } from "../../../Post"

interface IContentProps {
	postID: string
	dataPostUtc: string
	title: string
	avatar: string
	author: string
}

export function Content({ postID, avatar, author, dataPostUtc, title }: IContentProps) {
	const link = "/posts/" + postID
	return (
		<div className={styles.textContent}>
			<CardData dataPostUtc={dataPostUtc} avatar={avatar} author={author} />
			<h2 className={styles.title}>
				<Link to={link} className={styles.postLink}>
					{title}
				</Link>
			</h2>
		</div>
	)
}
