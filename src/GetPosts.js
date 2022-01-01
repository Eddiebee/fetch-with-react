import { selectedBtnStyle } from "./selectedBtnStyle";

const GetPosts = ({ handleGetData, selectedBtn }) => {
  const data = "posts";
  return (
    <>
      <button
        onClick={() => handleGetData(data)}
        style={selectedBtnStyle(selectedBtn, data)}
      >
        {data}
      </button>
    </>
  );
};

export default GetPosts;
