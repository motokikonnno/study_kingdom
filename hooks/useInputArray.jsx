import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleText = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleArray = useCallback(() => {
    const NewArray = [...array, text];
    setArray(NewArray);
  }, [array, text]);

  return { text, array, handleText, handleArray };
};
