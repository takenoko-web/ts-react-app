import { FC } from "react";
import { UserProfileType } from "./Types/UserProfileType";

type Props = {
    user: UserProfileType;
}
//プロパティの.繋ぎは?をつけることで、オプショナルチューニングできる
//nullの時エラー出ず、undifinedを返す
export const UserProfile: FC<Props> = (props) => {
    const { user } = props
    return (
        <dl>
            <dt>名前</dt>
            <dd>{user.name}</dd>
            <dt>趣味</dt>
            <dd>{user.hobbies?.join("/")}</dd>
        </dl>
    )
}