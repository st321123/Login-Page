import React, { useState } from "react";

const App = () => {
  const [fullName, setname] = useState({
    fName: "",
    lName: "",
  });
  function chanF(event) {
    const { name, value } = event.target;
    setname((prevValue) => {

      return {
        ...prevValue,
        [name]: value
      };
    })
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={chanF} />
        <input name="lName" placeholder="Last Name" onChange={chanF} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
