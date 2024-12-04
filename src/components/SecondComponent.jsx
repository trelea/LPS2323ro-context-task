import { useContext } from "react";
import { GlobalContext } from "../context/userContext";

export default function SecondComponent() {
  const { data } = useContext(GlobalContext);
  return <h1>Second Component: {data}</h1>;
}
