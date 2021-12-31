const GetComments = ({ handleGetData }) => {
  const data = "comments";
  return <button onClick={() => handleGetData(data)}>Comments</button>;
};

export default GetComments;
