import React from "react"
import styles from "./icon.sass"
import { BlockIcon, CommentIcon, MenuIcon, RepostIcon, SavePostIcon, WarningIcon } from "../Icons"
import classNames from "classnames"

interface IIconProps {
	name: EIcons
	size?: 10 | 13 | 16
}

export const enum EIcons {
	menu,
	comment,
	repost,
	block,
	save,
	warning,
}

const icons = {
	[EIcons.menu]: <MenuIcon />,
	[EIcons.comment]: <CommentIcon />,
	[EIcons.repost]: <RepostIcon />,
	[EIcons.block]: <BlockIcon />,
	[EIcons.save]: <SavePostIcon />,
	[EIcons.warning]: <WarningIcon />,
}

export function Icon({ name, size = 16 }: IIconProps) {
	const classes = classNames(styles[`s${size}`], [styles.iconContainer])

	return <div className={classes}>{icons[name]}</div>
}
