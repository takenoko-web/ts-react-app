export const Practice3 = () => {
    //返り値の型指定 引数の()の後に :型
    const getTotalFee = (num: number): number => {
        const total = num * 1.1;
        return total;
    }
    const onClickPractice = () => {
        let total:number = 0
        total = getTotalFee(1000)
        console.log('変数'+total)
    }
    return (
        <>
            <div>
                <p>変数の型指定</p>
                <button onClick={onClickPractice}>実行</button>
            </div>
        </>
    )
}