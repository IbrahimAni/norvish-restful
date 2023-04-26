
const Sidebar = ({setShowModal, setSwitchPage}) => {
  const handleClick = () =>{
    setSwitchPage("landing");
  }

  const handleProducts = () => {
    setSwitchPage("productCategory");
  }

  const handleSettings = () => {
    setShowModal(true)
  }



  const navLinks = [
    { name: "Dashboard", clickFunction: handleClick, path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "Products", clickFunction: handleProducts, path: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" },
    { name: "Settings", clickFunction: handleSettings, path: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" },
  ];
  
  
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
            <div className="flex items-center">
                <h2 className="text-xl text-blue-500 font-bold">Norvish Admin</h2>
            </div>
            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                {navLinks.map((link, key) => {
                  return (
                    <li
                      key={key}
                      className="rounded-sm flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                      onClick={link.clickFunction}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={link.path}
                      />                      
                    </svg>
                    <span>{link.name}</span>
                    </li>
                  );
                })}   
                </ul>
            </div>
        </div>
    </div>         

  )
}

export default Sidebar