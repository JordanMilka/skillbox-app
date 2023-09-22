import React from "react"
import { IBlockProps } from "./Feed"

export function Block(props: IBlockProps) {
	return <div>{props.title}</div>
}
