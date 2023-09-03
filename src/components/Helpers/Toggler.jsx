import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Toggler = () => {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <span onClick={() => setVisiblity((visiblity) => !visiblity)}>
      {visible ? <AiFillEyeInvisible/> : <AiFillEye/>}
    </span>
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default Toggler;
