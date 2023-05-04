import {AppDetails, BookDetail, Books, Header, Modal, ProductCategory} from "./index";
import {useState} from "react";

const Landing = ({showModal, setShowModal, switchPage, setSwitchPage}) => {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const handleSelectedBook = (id) => {
    setSelectedBookId(id);
  };

  return (
    <div className="container mx-auto mt-3 px-5">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Header />
      {switchPage === 'landing' && <AppDetails />}
      {switchPage === 'productCategory' && <ProductCategory setSwitchPage={setSwitchPage} />}
      {switchPage === 'books' && <Books deleted={deleted} setDeleted={setDeleted} setSwitchPage={setSwitchPage} onSelectBook={handleSelectedBook} />}
      {switchPage === 'view' && <BookDetail setDeleted={setDeleted} setSwitchPage={setSwitchPage} bookId={selectedBookId} />}
  </div>
  )
}

export default Landing