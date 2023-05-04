import { useState } from "react";
import {BookTable, Pagination, Notification} from "./index"
const Books = ({setSwitchPage, onSelectBook, deleted, setDeleted}) => {
const [pages, setPages] = useState([]);
  const dismissNotification = () => {
    // Reset the deleted state when the notification is dismissed
    setDeleted(false);
  };
  return (
    <>
    {deleted && (
        <Notification
          message="Book deleted successfully."
          duration={5000}
          onDismiss={dismissNotification}
        />
      )}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Books List</h2>
      <Pagination pages={pages} /> 
    </div>
    <BookTable setPages={setPages} setSwitchPage={setSwitchPage} onSelectBook={onSelectBook} />
    </>
  )
}

export default Books