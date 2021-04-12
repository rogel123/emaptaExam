import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteContact } from "../../actions";

const Home = () => {
  const contacts = useSelector((state) => state.contactReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <button
        style={{ marginBottom: 10 }}
        onClick={() => history.push("/create")}
      >
        Create contact
      </button>
      <div>
        {contacts.length > 0 ? (
          <table border={1} cellPadding={10}>
            <tbody>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {contacts.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.address}</td>
                  <td>{e.email}</td>
                  <td>
                    <button
                      style={{ marginRight: 5 }}
                      onClick={() => history.push(`/update/${e.id}`)}
                    >
                      Update
                    </button>
                    <button onClick={() => dispatch(deleteContact(e.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No contacts available</div>
        )}
      </div>
    </div>
  );
};

export default Home;
