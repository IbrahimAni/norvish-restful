
const AppDetails = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                  Total Books
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                  12,00
              </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                  Project Details
              </div>
              <h5 className="mt-1 font-semibold text-gray-900">
                  Click here for more Details...
              </h5>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                  Recently Searched
              </div>
              <h5 className="mt-1 font-semibold text-gray-900">
                  Harry Portal and the Deadly Hallows
              </h5>
          </div>
      </div>
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
         ...
      </div>
    </>
  )
}

export default AppDetails