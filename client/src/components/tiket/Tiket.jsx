// import example from '../../response.json'
const Tiket = ({ ticker,price,change, change_percent,dividend }) => {
    return (
        <>
            <p>{ticker} : {price}</p>
            <p>{change}</p>
            <p>{change_percent }</p>
            <p>{dividend}</p>

            <button type="button">Добавить</button>
        </>
    )
}
 export default Tiket