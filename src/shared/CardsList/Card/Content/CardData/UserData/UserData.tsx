import React from "react"
import styles from "./userdata.sass"

interface IUserDataProps {
	avatar: string
	author: string
}

export function UserData({ avatar, author }: IUserDataProps) {
	return (
		<div className={styles.userLink}>
			<img className={styles.avatar} src={avatar} alt="avatar" />
			<a href="#user-url" className={styles.username}>
				{author}
			</a>
		</div>
	)
}
