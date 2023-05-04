import { useEffect } from "react";

const Notification = ({ message, duration, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);
  return (
    <>    
      <div className="fixed top-0 left-0 right-0 z-20"  id="alert">
        <div className="bg-green-500 text-white px-4 py-3 shadow-md" role="alert">
          {message}
        </div>
      </div>
    </>
  )
}

export default Notification