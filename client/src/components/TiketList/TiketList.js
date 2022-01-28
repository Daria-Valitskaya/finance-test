import Tiket from "../tiket/Tiket";
import { nanoid } from "nanoid";
const TiketList = ({ tiket }) => {
  return (
    <ul>
      {tiket.map((item) => (
        <li key={nanoid()}>
          <Tiket
            id={nanoid()}
            ticker={item.ticker}
            price={item.price}
            change={item.change}
            change_percent={item.change_percent}
            dividend={item.dividend}
            yielt={item.yielt}
          />
        </li>
      ))}
    </ul>
  );
};
export default TiketList;
