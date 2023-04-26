
const Modal = ({setShowModal}) => {
  const handleClick = (format) => {
    setShowModal(false);
    localStorage.setItem("format", format.name);
  }
  const formats = [
    {id: 1, name: "JSON", click: handleClick},
    {id: 2, name: "XML", click: handleClick},
    {id: 3, name: "Text", click: handleClick},
  ]
  return (
        <>
          <div
  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
  <div className="relative my-6 mx-auto" style={{ width: "300px" }}>
    {/*content*/}
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      {/*header*/}
      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        <h4 className="text-xl font-semibold">Select Format</h4>        
      </div>
      {/*body*/}
      <div className="relative p-6 flex-auto">
        <div className="flex justify-between">
          {formats.map((format, key) => {
            return(
              <button key={key} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded" onClick={() => format.click(format)}>{format.name}</button>
            )
          })}
        </div>
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>
<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
         )
}

export default Modal