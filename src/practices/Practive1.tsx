export const Practice1 = () => {
    //引数の型指定 :型
    const calcTotalFee = (num: number) => {
        const total = num * 1.1;
        console.log('引数'+total);
    }
    const onClickPractice = () => {
        calcTotalFee(1000)
    }
    return (
        <>
            <div>
                <p>引数の型指定</p>
                <button onClick={onClickPractice}>実行</button>
            </div>
        </>
    )
}