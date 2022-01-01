import { selectedBtnStyle } from "./selectedBtnStyle";

const GetUsers = ({ handleGetData, selectedBtn }) => {
  const data = "users";
  return (
    <button
      onClick={() => handleGetData(data)}
      style={selectedBtnStyle(selectedBtn, data)}
    >
      {data}
    </button>
  );
};

export default GetUsers;
