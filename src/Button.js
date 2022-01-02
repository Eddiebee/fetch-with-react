import { selectedBtnStyle } from "./selectedBtnStyle";
const Button = ({ handleGetData, selectedBtn, data }) => {
  return (
    <button
      onClick={() => handleGetData(data)}
      style={selectedBtnStyle(selectedBtn, data)}
    >
      {data}
    </button>
  );
};

export default Button;
