import React, { useCallback, useEffect, useState } from "react";

function actionByKey(key) {
  const keyActionMap = {
    keyW: "moveForward",
    keyS: "moveBackward",
    keyA: "moveLeft",
    keyD: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
  };
  return keyActionMap[key];
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  });

  // 押下するボタンだけ値をtrueに
  const handleKeyDown = useCallback((e) => {
    console.log(e);
    const action = actionByKey(e.code);
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [actions]: true,
        };
      });
    }
  });

  // 押下されていない状態に戻るボタンの値をfalseに
  const handleKeyUp = useCallback((e) => {
    const action = actionByKey(e.code);
    if (action) {
      setActions((prev) => {
        return {
          ...prev,
          [actions]: false,
        };
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
};
