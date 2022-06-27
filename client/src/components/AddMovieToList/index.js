import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAddMovieToList } from "../../api/lists";
import useAuth from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import CustomModal from "../CustomModal";

export default function AddMovieToList({ movie }) {
  const { auth } = useAuth();
  let [modalOpen, setModalOpen, toggle] = useModal();

  const { mutate: addMovieToList } = useAddMovieToList();

  const handleClick = () => {
    toggle();
  };

  const onSelect = (idList) => {
    addMovieToList(
      { url: `/api/lists/${idList}`, movie },
      {
        onSuccess: async (data, context) => {
          setModalOpen(false);
        },
      }
    );
  };

  return (
    <>
      <CustomModal
        modalOpen={modalOpen}
        toggle={toggle}
        onSelect={onSelect}
      ></CustomModal>
      <Button variant="outline-warning" onClick={() => handleClick()}>
        + List
      </Button>
    </>
  );
}
