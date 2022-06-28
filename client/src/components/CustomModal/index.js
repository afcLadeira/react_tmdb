import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useQueryClient } from "react-query";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useGetMyLists } from "../../api/lists";
import useAuth from "../../hooks/useAuth";
import MySpinner from "../Spinner";

export default function CustomModal({ modalOpen, toggle, onSelect }) {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const { auth } = useAuth();
  const [userId, setUserId] = useState(auth?.id ? auth.id : null);
  const queryClient = useQueryClient();

  const {
    error,
    data: lists,
    isLoading,
  } = useGetMyLists(`/api/users/${userId}/lists`, userId);

  // useEffect(() => {
  //   if (modalOpen) {

  //     const data = queryClient.getQueryData("mylists");

  //     if (!data) {
  //       setUserId(auth.id);
  //     } else {
  //       setData(data);
  //     }
  //   }
  // }, [userId, auth.id, modalOpen, queryClient]);

  const handleToggle = () => toggle();

  const handleSelect = (e) => {
    let idList = e.target.value;
    setSelected(idList);
  };

  return (
    <>
      <Modal show={modalOpen} onHide={handleToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Select list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {isLoading && <MySpinner></MySpinner>}

            {lists && (
              <Form.Select onChange={handleSelect}>
                <option>Select a list</option>
                {lists.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onSelect(selected)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
