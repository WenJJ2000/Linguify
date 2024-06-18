import React from "react";

export default function chatbox(data) {
  return (
    <div>
      <button className={data.type}></button>
      <button className="bubble"></button>
    </div>
  );
}
