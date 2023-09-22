import React, { useState } from "react"
import styles from "./controls.sass"
import { EIcons, Icon } from "../../../../Icon"
import { ControledForm } from "../ControledForm"

interface IControlsProps {
	postID: string
	author: string
}

export function Controls({ postID, author }: IControlsProps) {
	const [isFormOpened, setIsFormOpened] = useState(false)

	return (
		<div className={styles.controls}>
			<div className={styles.wrapper}>
				<button onClick={() => setIsFormOpened(!isFormOpened)}>
					<Icon name={EIcons.comment} size={13} /> Комментировать
				</button>
				<button>
					<Icon name={EIcons.repost} size={13} /> Поделиться
				</button>
				<button>
					<Icon name={EIcons.warning} size={13} /> Пожаловаться
				</button>
			</div>
			{isFormOpened && <ControledForm author={author} onClose={() => setIsFormOpened(false)} />}
		</div>
	)
}
