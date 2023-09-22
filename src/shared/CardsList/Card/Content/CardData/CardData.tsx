import React from "react"
import styles from "./carddata.sass"
import { UserData } from "./UserData"

interface ICardDataProps {
	dataPostUtc: string
	avatar: string
	author: string
}

export function CardData({ avatar, author, dataPostUtc }: ICardDataProps) {
	const date = new Date(Number(dataPostUtc) * 1000)
	return (
		<div className={styles.metaData}>
			<UserData avatar={avatar} author={author} />
			<span className={styles.createAt}>
				<span className={styles.publishedLabel}>опубликовано </span>
				{date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " в " + date.getHours() + ":" + date.getMinutes()}
			</span>
		</div>
	)
}
