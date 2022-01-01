import { selectedBtnStyle } from "./selectedBtnStyle";

const GetComments = ({ handleGetData, selectedBtn }) => {
  const data = "comments";
  return (
    <button
      onClick={() => handleGetData(data)}
      style={selectedBtnStyle(selectedBtn, data)}
    >
      {data}
    </button>
  );
};

export default GetComments;
