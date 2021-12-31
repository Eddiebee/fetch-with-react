const ErrorMessage = ({ fetchError }) => {
  return (
    <>
      <p style={{ color: "red" }}>
        {`Error: ${fetchError}.`}
        <br />
        We recommend you consider Checking your Internet connection.
      </p>
    </>
  );
};

export default ErrorMessage;
