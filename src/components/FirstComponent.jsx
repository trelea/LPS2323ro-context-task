import { useContext } from "react";
import { GlobalContext } from "../context/userContext";

export default function FirstComponent() {
  const { data, setData } = useContext(GlobalContext);

  return (
    <>
      <h1>First Component</h1>
      <h1>{data}</h1>
      <button onClick={() => setData("Text changed")}>Change State</button>
    </>
  );
}

// Task: 2 pages
// /add-to-context -> input btn -> send input value to global context
// /get-context -> display data
