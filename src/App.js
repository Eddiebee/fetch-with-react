import { useEffect, useState } from "react";
import GetUsers from "./GetUsers";
import GetPosts from "./GetPosts";
import GetComments from "./GetComments";
import ViewData from "./ViewData";
import ErrorMessage from "./ErrorMessage";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error.message);
        setFetchError(error.message);
      } finally {
        // ...
      }
    };

    fetchData();
  }, [url]);

  const handleGetData = (data) => {
    const dataUrl = url.slice(0, 37) + data;
    setUrl(dataUrl);
  };

  return (
    <>
      <nav>
        <GetUsers handleGetData={handleGetData} />
        <GetPosts handleGetData={handleGetData} />
        <GetComments handleGetData={handleGetData} />
      </nav>
      <main>
        {!fetchError && <ViewData data={data} />}
        {fetchError && <ErrorMessage fetchError={fetchError} />}
      </main>
    </>
  );
}

export default App;
