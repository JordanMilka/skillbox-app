import React from "react"
import { preventDefault } from "./preventDefault"
import { stopPropagation } from "./stopPropagation"
import { getValue } from "./getValue"

export interface InputProps {
	onChange: (value: string) => void
	value: string
}

export function Input({ value, onChange }: InputProps) {
	return <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
}
