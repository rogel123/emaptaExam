export const addContact = (data) => {
  return {
    type: "ADD",
    payload: { data }
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE",
    payload: { id }
  };
};

export const updateContact = (data) => {
  return {
    type: "UPDATE",
    payload: { data }
  };
};
