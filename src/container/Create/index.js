import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../actions";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const contacts = useSelector((state) => state.contactReducer);
  const createId =
    contacts.length > 0
      ? Math.max.apply(
          null,
          contacts.map((item) => item.id)
        ) + 1
      : 1;

  const dispatch = useDispatch();
  const history = useHistory();

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    if (name === "" || email === "" || address === "") {
      alert("Please fill out all the required fields");
    } else {
      const data = {
        id: createId,
        name,
        address,
        email
      };
      dispatch(addContact(data));
      history.push("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto"
      }}
    >
      <h1>Create Contact</h1>
      <h4>* Required fields</h4>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <div style={{ width: 75 }}>Name* : </div>
        <input
          onChange={onNameChange}
          type="text"
          style={{ width: 300, height: 20 }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <div style={{ width: 75 }}>Address* : </div>
        <input
          onChange={onAddressChange}
          type="text"
          style={{ width: 300, height: 20 }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <div style={{ width: 75 }}>Email* : </div>
        <input
          onChange={onEmailChange}
          type="text"
          style={{ width: 300, height: 20 }}
        />
      </div>
      <div>
        <button
          style={{ padding: 6, width: 100, marginRight: 5 }}
          onClick={() => history.push("/")}
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          style={{
            backgroundColor: "#039be5",
            padding: 6,
            color: "#fff",
            width: 100
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Create;
