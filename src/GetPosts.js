const GetPosts = ({ handleGetData }) => {
  const data = "posts";
  return <button onClick={() => handleGetData(data)}>Posts</button>;
};

export default GetPosts;
