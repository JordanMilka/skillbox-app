import React from "react"
import { preventDefault } from "./preventDefault"
import { stopPropagation } from "./stopPropagation"

export function NotStandartLink(props: any) {
	// const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
	// 	e.stopPropagation()
	// 	e.preventDefault()
	// 	props.onClick()
	// }
	// Эта функция большая и неудобная
	return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
}
