// Список хуков:

/*
useState
useEffect
useRef
useReducer
useMemo
useContext
useCallback
useImperativeHandle - не будем рассматривать
useLayoutEffect - не будем рассматривать
useDebugValue - не будем рассматривать
*/
import React, { useMemo } from "react"

export function MyHooks({ title, id }: { title: string; id?: string }) {
	React.useEffect(() => {
		console.log("componentDidMount")
		console.log("componentWithUpdate")
	})
	// Если мы не будем использовать второй аргумент в useEffect оно превратится в componentDidMount и componentWithUpdate
	// В таком случае useEffect запускается каждый раз при рендере

	React.useEffect(() => {
		console.log("componentDidMount")
		return () => {
			console.log("componentWillUnmount") // Если прописать return у useEffect, то функция в нём вызовется перед удалением компонента
		}
	}, [])
	// Если указать второй аругмент, то функция будет componentDidMount
	// С пустым массивым мы следим "ни за чем", поэтому оно сработает 1 раз

	React.useEffect(() => {
		console.log("ComponentWillReceiveProps: ", title)
	}, [title])
	// Будет срабатывать каждый раз, когда будет изменять title. useEffect будет наблюдать за title

	const [isMounted] = useIsMounted()
	console.log(isMounted) //false, а затем true
	React.useEffect(() => {
		console.log("isMounted: ", isMounted) // false, а затем true
	}, [isMounted])

	// Данная функция будет вызвана лишь 1 раз, не будет вызываться при каждом рендере. Более правильный вызов - с созданием переменных
	const items = 10
	const multiplier = 5
	const result = React.useMemo(() => calculate(items, multiplier), [items, multiplier])
	return (
		<div style={{ width: window.innerWidth }}>
			{title} {id} {result}
		</div>
	)
}

// Собственный хук. хуки не работают на сервере, они работают на клиенте
export function useIsMounted() {
	const [isMounted, setIsMounted] = React.useState(false)

	React.useEffect(() => {
		setIsMounted(true)
	}, [])

	return [isMounted]
	// Можно вернуть и просто значение, но мы пишем как пишет React
}
// хуки должны быть вызваны только в теле функц. компонента!
// Нельзя менять порядок исполнения хуков или оборачивать их в if
// Если мы хотим использовать хук, когда что-то изменится, то нужно использовать зависимости []

function calculate(items: number, multiplier: number) {
	return new Array(items).fill(1).reduce((a, v) => a * multiplier)
}
