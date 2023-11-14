import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchSingleUser() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users${selectedContactId}`
        );
        const json = await res.json();
        console.log(json);
        setContact(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSingleUser();
  }, [selectedContactId]);
  return (
    <>
      <div>
        <h1>{contact?.name}</h1>
        <p>{contact?.email}</p>
        <p>{contact?.address?.city}</p>
        <p>{contact?.phone}</p>
      </div>
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Close
      </button>
    </>
  );
}
