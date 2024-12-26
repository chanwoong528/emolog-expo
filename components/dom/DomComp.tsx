"use dom";

import React from "react";

import "./domComp.css";

export default function MyComponent({
  name,
  onClickProps,
}: {
  name: string;
  onClickProps: (data: string) => Promise<void>;
  dom?: import("expo/dom").DOMProps;
}) {
  return (
    <div className='dom-comp'>
      <p onClick={() => onClickProps("world")}>Click me {name}</p>
    </div>
  );
}
