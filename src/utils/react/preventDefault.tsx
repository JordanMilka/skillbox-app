export function preventDefault<T extends (e: any) => void>(fn: T) {
	//Принимает функцию
	// Ограничиваем, чтобы это была именно функция
	return <E extends React.SyntheticEvent<any>>(e: E) => {
		// Возвращает функцию, которая вызывает preventDefault и передаёт наш event дальше
		// Ограничиваем, чтобы функция принимала только эвент
		e.preventDefault()
		fn(e)
	}
}
