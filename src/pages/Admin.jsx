import { useState, useEffect } from "react";
import { Landing, Sidebar } from "../components"

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [switchPage, setSwitchPage] = useState("landing")

  useEffect(() => {
    const format = localStorage.getItem('format');
  
    if (!format) {
      localStorage.setItem('format', 'json');
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar setShowModal= {setShowModal} setSwitchPage={setSwitchPage} />
      <Landing showModal={showModal} setShowModal={setShowModal} switchPage={switchPage} setSwitchPage={setSwitchPage} />
    </div>
  )
}

export default Admin 