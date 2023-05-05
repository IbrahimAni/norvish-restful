import {AppDetails, BookDetail, Books, Header, Modal, ProductCategory, AddForm, UpdateForm} from "./index";
import {useState} from "react";

const Landing = ({showModal, setShowModal, switchPage, setSwitchPage}) => {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [data, setData] = useState({});
  const [fetch, setFetch] = useState(false);
  const [updated, setUpdated] = useState(false)


  const handleSelectedBook = (id) => {
    setSelectedBookId(id);
  };

  return (
    <div className="container mx-auto mt-3 px-5">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Header setData={setData} setSwitchPage={setSwitchPage} setSelectedBookId={setSelectedBookId}  />
      {switchPage === 'landing' && <AppDetails />}
      {switchPage === 'productCategory' && <ProductCategory setFetch={setFetch} setSwitchPage={setSwitchPage} />}
      {switchPage === 'books' && <Books fetch={fetch} setFetch={setFetch} data={data} setData={setData} deleted={deleted} setDeleted={setDeleted} setSwitchPage={setSwitchPage} onSelectBook={handleSelectedBook} />}
      {switchPage === 'view' && <BookDetail updated={updated} setUpdated={setUpdated} setDeleted={setDeleted} setSwitchPage={setSwitchPage} selectedBookId={selectedBookId} setSelectedBookId={setSelectedBookId} />}
      {switchPage === 'add' && <AddForm  />}
      {switchPage === 'update' && <UpdateForm setUpdated={setUpdated} selectedBookId={selectedBookId} setSwitchPage={setSwitchPage} />}
    </div>
  )
}

export default Landing