import React from "react"
import styles from "./preview.sass"

interface IPreviewProps {
	previewImg: string
}

export function Preview({ previewImg }: IPreviewProps) {
	return (
		<div className={styles.preview}>
			<img src={previewImg} alt="preview" className={styles.previewImg} />
		</div>
	)
}
