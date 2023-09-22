import React from "react"
import { getChecked } from "./getChecked"

export function Checkbox(props: { onChange: (value: boolean) => void; value: boolean }) {
	return <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
}
