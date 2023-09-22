import React from "react"
import styles from "./text.sass"
import classNames from "classnames"

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

export enum EColor {
	black = "black",
	orange = "#cc6633",
	green = "#A4CC33",
	white = "white",
	greyF4 = "#f4f4f4",
	greyF3 = "#f3f3f3",
	greyD9 = "#d9d9d9",
	greyC4 = "#c4c4c4",
	grey99 = "#999999",
	grey66 = "#666666",
}

interface ITextProps {
	As?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "div"
	children?: React.ReactNode
	size: TSizes
	mobileSize?: TSizes
	tabletSize?: TSizes
	desktopSize?: TSizes
	color?: EColor
	bold?: boolean
}

export function Text(props: ITextProps) {
	const { As = "span", color = EColor.black, children, size, mobileSize, tabletSize, desktopSize, bold = false } = props

	const classes = classNames(styles[`s${size}`], styles[color], { [styles.bold]: bold }, { [styles[`m${mobileSize}`]]: mobileSize }, { [styles[`t${tabletSize}`]]: tabletSize }, { [styles[`d${desktopSize}`]]: desktopSize })

	return <As className={classes}>{children}</As>
}
