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
            <div className="Modal-details">
              <h1>{book.title}</h1>
              <h3>{book.author}</h3>
              <p>{book.description}</p>
            </div>
            <img src={book.image} alt={book.title} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookCard;
