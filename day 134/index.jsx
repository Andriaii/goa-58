// import React, { useState } from "react";

// function MessageChanger() {
//   // useState-ის გამოყენებით ვინახავთ ტექსტს
//   const [message, setMessage] = useState("This Is The Message On My Web Page");

//   const handleClick = () => {
//     setMessage("This Is The Second Message On My Web Page");
//   };

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={handleClick}>Change Message</button>
//     </div>
//   );
// }

// export default MessageChanger;








// import React, { useState } from "react";

// function SecretMessage() {
//   const [showSecret, setShowSecret] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowSecret(true)}>Show The Secret Message</button>
//       {showSecret && <p>You Have Revealed The Secret Message</p>}
//     </div>
//   );
// }

// export default SecretMessage;








import React, { useState } from "react";

function LightSwitch() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  return (
    <div>
      <p>{isLightOn ? "The Light Is ON" : "The Light Is OFF"}</p>
      <button onClick={toggleLight}>
        {isLightOn ? "Turn The Light OFF" : "Turn The Light ON"}
      </button>
    </div>
  );
}

export default LightSwitch;
