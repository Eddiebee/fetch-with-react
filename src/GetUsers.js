const GetUsers = ({ handleGetData }) => {
  const data = "users";
  return <button onClick={() => handleGetData(data)}>users</button>;
};

export default GetUsers;
