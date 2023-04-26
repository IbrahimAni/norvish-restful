import {AppDetails, Books, Header, Modal, ProductCategory} from "./index"

const Landing = ({showModal, setShowModal, switchPage, setSwitchPage}) => {
  return (
    <div className="container mx-auto mt-3 px-5">
      {showModal && <Modal setShowModal={setShowModal} />}
      <Header />
      {switchPage === 'landing' && <AppDetails />}
      {switchPage === 'productCategory' && <ProductCategory setSwitchPage={setSwitchPage} />}
      {switchPage === 'books' && <Books setSwitchPage={setSwitchPage} />}
  </div>
  )
}

export default Landing