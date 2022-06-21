import React, { useEffect } from "react";
import { Editor, SimpleCircularOrLinearView } from "open-vector-editor";
import test from "../../tg-iso-stuff/test";

function Comp({ prop }) {
  return (
    <div>
      hey i am nested
      <button
        onClick={(e) => {
          debugger;
          test();
        }}
      >
        click me
      </button>
      <Editor editorName="demo" />
    </div>
  );
}

export default Comp;
