import { FC } from "react"
import { TodoType } from "./Types/TodoType"

/**
 * 共通化した型定義で必要なプロパティだけを定義し直す
 * Pick<型名: プロパティ名 | プロパティ名...>
 * 共通化した型定義で不要なプロパティだけを定義し直す
 * Omit<型名: プロパティ名 | プロパティ名...>
 */
export const Todo: FC<Pick<TodoType, "userId" | "title" | "completed">> = (props) => {
    //completedはnullableなので、初期値falseを設定しておく
    const { title, userId, completed = false } = props
    const completedMark = completed ? '完了' : '未完了'
    return <p>{`${completedMark} ${title} : ${userId}`}</p>
}