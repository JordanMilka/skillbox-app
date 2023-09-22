// import React from "react"

// export function withKey(key?: string) {
// 	// Функция withKey- функция высшего порядка, принимающая строковый ключ и возвращает функцию, которая принимает компонент (withIdKey(Block)),
// 	// который в свою очередь тоже функция (Функц. компонент) и возвращает 3-ью функцию аргумент для map.
// 	return <E, T extends React.ComponentType<E>>(component: T) =>
// 		// map передаёт данную функцию, свойства и индекс. Далее мы создаём компонент Block c нашими props
// 		(props: E, index: number) =>
// 			React.createElement(component, { ...props, key: key ? props[key as keyof E] : index }, [])
// }
