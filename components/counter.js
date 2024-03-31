'use client'
import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  setTimeout(() => setCount(count + 1), 1000);
  return (
    <>
      <div className={props.className}>The count is {count}</div>
    </>);
}