import React from "react"
import { preventDefault } from "../utils/react/preventDefault"
import { stopPropagation } from "../utils/react/stopPropagation"
import { getValue } from "../utils/react/getValue"

function InputExample({ value, onChange }: any) {
	return (
		<input
			type="text"
			value={value}
			// onChange={preventDefault(stopPropagation(getValue(onChange)))}
			// onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
			onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
		/>
	)
}

// Compose выполняет функции справа налево, по очереди
function compose<U>(...fns: Function[]) {
	return <E,>(initialValue: any): U => fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}

// Аналог compose, но выполняет функции слева направо
function pipe<U>(...fns: Function[]) {
	return <E,>(initialValue: any): U => fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

function pick<K extends string>(prop: K) {
	return <O extends Record<K, any>>(obj: O) => obj[prop]
}

// const some = pick('value')({value: 1})

function isEqual<T>(left: T) {
	return <E extends T>(right: E) => left === right
}

const comments = [
	{ id: 22, text: "text 1" },
	{ id: 44, text: "text 2" },
]

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond)
const filterWithId = createFilterBy("id")
const filterWithId22 = createFilterBy("id")(22)
const filterByValue = createFilterBy("value")

const filterComments = comments.filter(filterWithId(22)) //Все комменты, где id != 22
// Можно было так ({ id }) => id != 2

function cond(b: boolean) {
	return !b
}

const getValueNumber = pipe<number>(pick("currentTarget"), pick("value"), parseInt) // Но такое нельзя типизировать
