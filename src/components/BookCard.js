import Modal from "@mui/material/Modal";
import { useState } from "react";

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <img
        src={book.image}
        alt={book.title}
        onClick={() => setShowModal(true)}
      />

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div>
          <div className="Modal">
            <h1>{book.title}</h1>

          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookCard;
