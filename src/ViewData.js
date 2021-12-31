const ViewData = ({ data }) => {
  return (
    <article>
      <ul>
        {data.map((datum) => (
          <li key={datum.id}>{JSON.stringify(datum)}</li>
        ))}
      </ul>
    </article>
  );
};

export default ViewData;
