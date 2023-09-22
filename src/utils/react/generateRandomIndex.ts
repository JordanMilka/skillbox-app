import { assoc } from "../js/assoc"

// библиотека nanoid может генерировать случайные id
export const generateRandomString = () => Math.random().toString(36).substring(2, 15)

export const assignID = assoc("id", generateRandomString) // Здесь GRS вызывается лишь 1 раз

export const generateID = <O extends object>(obj: O) => assignID(obj) // здесь GRS вызывается каждый раз при вызове функции
