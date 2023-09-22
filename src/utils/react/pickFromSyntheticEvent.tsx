import React from "react"

export function pickFromSyntheticEvent<T extends HTMLElement>() {
	// Обёртка нужна лишь для generic T
	// Написали в generic, что T содержит в себе HTML элемент, чтобы мы могли передать сюда только HTMLElement
	return <K extends keyof T>(key: K) =>
		<E extends (t: T[K]) => void>(
			fn: E // getValue принимает callback, в который она передаст результат e.currentTarget.value
		) =>
		(e: React.SyntheticEvent<T>) =>
			fn(e.currentTarget[key])
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value")
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked")
