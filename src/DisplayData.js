import React from "react";
import HOCFetchData from "./HocFetchData";

function DisplayData(props) {
  const { data, loding, error } = props;

  console.log(data);
  return (
    <>
      {!error && loding ? (
        <h1>plase wait ...</h1>
      ) : (
        data &&
        data.map((item) => {
          const { id, name, email } = item;
          return (
            <li key={id}>
              {name},{email}
            </li>
          );
        })
      )}
    </>
  );
}
const url = "https://jsonplaceholder.typicode.com/users";
export default HOCFetchData(url)(DisplayData);
