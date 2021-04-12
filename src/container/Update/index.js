import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../actions";
import { useHistory } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const contacts = useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const updateContact = contacts.find((item) => item.id === parseInt(id, 10));
    setName(updateContact.name);
    setAddress(updateContact.address);
    setEmail(updateContact.email);
    if (updateContact === undefined) {
      history.push("/404");
    }
  }, [contacts, id, history]);

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
      const updateData = {
        id: parseInt(id, 10),
        name,
        address,
        email
      };
      dispatch(updateContact(updateData));
      history.push("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h1>Update Contact</h1>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <div style={{ width: 60 }}>Name: </div>
        <input
          onInput={onNameChange}
          type="text"
          defaultValue={name || ""}
          style={{ width: 300, height: 20 }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <div style={{ width: 60 }}>Address: </div>
        <input
          onInput={onAddressChange}
          defaultValue={address || ""}
          type="text"
          style={{ width: 300, height: 20 }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <div style={{ width: 60 }}>Email: </div>
        <input
          onInput={onEmailChange}
          type="text"
          defaultValue={email || ""}
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
export default Update;
