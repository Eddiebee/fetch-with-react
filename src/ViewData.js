const ViewData = ({ data }) => {
  return (
    <ul>
      {data.map((datum) => (
        <li key={datum.id}>{JSON.stringify(datum)}</li>
      ))}
    </ul>
  );
};

export default ViewData;
