import {BookTable, Pagination} from "./index"
const Books = ({setSwitchPage}) => {
  return (
    <>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Books List</h2>
      {/* <jsp:include page="../components/pagenation.jsp" /> */}
      <Pagination /> 
    </div>
    <BookTable setSwitchPage={setSwitchPage} />
    </>
  )
}

export default Books