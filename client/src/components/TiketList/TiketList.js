import Tiket from "../tiket/Tiket";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import Button from "../Button/Button";
import * as actions from "../../redux/actions";
const TiketList = ({ value, onAdd, onRemove }) => {
  return (
    <>
      <Button type={"button"}>{value}</Button>
      <button type="button" onClick={onAdd}>
        +1
      </button>
      <button type="button" onClick={onRemove}>
        -2
      </button>
    </>
    // <ul>
    //   {tiket.map((item) => (
    //     <li key={nanoid()}>
    //       <Tiket
    //         id={nanoid()}
    //         ticker={item.ticker}
    //         price={item.price}
    //         change={item.change}
    //         change_percent={item.change_percent}
    //         dividend={item.dividend}
    //         yielt={item.yielt}
    //       />
    //     </li>
    //   ))}
    // </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.tiker.tikerValue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(actions.add(1)),
    onRemove: () => dispatch(actions.remove(2)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TiketList);
