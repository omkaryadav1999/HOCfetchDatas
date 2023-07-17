import React, { useEffect, useState } from "react";

const HOCFetchData = (url) => (WrappedComponent) => {
  function FetchingFun(prop) {
    const [data, setData] = useState();
    const [loding, setLoding] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
      const getData = async () => {
        try {
          let response = await fetch(url);
          if (!response.ok) {
            throw new Error("network response was not ok");
          }
          let data = await response.json();
          setData(data);
          setLoding(false);
        } catch (error) {
          setError("error fetching data");
          setLoding(false);
        }
      };
      getData();
    }, []);
    return (
      <>
        <WrappedComponent data={data} loding={loding} error={error} {...prop} />
      </>
    );
  }
  return FetchingFun;
};

export default HOCFetchData;
