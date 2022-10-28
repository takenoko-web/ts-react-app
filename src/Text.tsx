import { FC } from "react";

type Props = {
    color: string;
    fontSize: string;
}
// React.FC 関数コンポーネントの略 以前は明治せずともchildrenを受け取れたが、18から不可能になった
export const Text: FC<Props> = (props: Props) => {
    const { color, fontSize } = props
    return (
        <p style={{ color, fontSize }}>textです</p>
    )
}