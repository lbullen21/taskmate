import { useState } from "react";
export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className={`box ${result}`}>
          {children}
          <button onClick={() => setShow(!show)}>Hide</button>
        </div>
      )}
    </>
  );
};
