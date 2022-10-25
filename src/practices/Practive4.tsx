export const Practice4 = () => {
    //strict:trueだと、引数の指定なし=型が暗黙的にanyとなっているというエラーが出る
    //num:anyならば明示的にanyとしているため、エラーが出ない
    const calcTotalFee = (num) => {
        const total = num * 1.1;
        console.log('引数の型any'+total);
    }
    const onClickPractice = () => {
        calcTotalFee(1000)
    }
    return (
        <>
            <div>
                <p>設定ファイルをいじる</p>
                <button onClick={onClickPractice}>実行</button>
            </div>
        </>
    )
}