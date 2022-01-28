import Tiket from "../tiket/Tiket";
const TiketList = ({ tiket }) => {
  return (
    <ul>
      {tiket.map((item) => (
        <li key={item.last_trade_time}>
          <Tiket
            id={item.last_trade_time}
            ticker={item.ticker}
            price={item.price}
            change={item.change}
            change_percent={item.change_percent}
            dividend={item.dividend}
          />
        </li>
      ))}
    </ul>
  );
};
export default TiketList;
