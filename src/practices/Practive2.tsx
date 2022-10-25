export const Practice2 = () => {
    //返り値の型指定 引数の()の後に :型
    const getTotalFee = (num: number): number => {
        const total = num * 1.1;
        return total;
    }
    const onClickPractice = () => {
        console.log('返り値'+getTotalFee(1000))
    }
    return (
        <>
            <div>
                <p>返り値の型指定</p>
                <button onClick={onClickPractice}>実行</button>
            </div>
        </>
    )
}