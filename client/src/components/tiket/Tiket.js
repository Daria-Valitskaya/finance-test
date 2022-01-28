import Button from "../Button/Button";
const Tiket = ({ ticker, price, change, change_percent, dividend, yielt }) => {
  return (
    <>
      <p>{ticker} :</p>
      <p> {price}</p>
      <p>{change}</p>
      <p>{change_percent}</p>
      <p>{dividend}</p>
      <p>{yielt}</p>

      <Button type={"button"}>Добавить</Button>
      <Button type={"button"}>Удалить</Button>
    </>
  );
};
export default Tiket;
