import SearchBox from "./SearchBox"

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '1rem',
          width: '100%',
        }}
      >
        <SearchBox />
        {/* Add any content or child components inside this div */}
        <a
          href="form"
          className="bg-blue-500"
          style={{
            color: '#ffffff',
            fontWeight: 600,
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            display: 'inline-block',
            marginLeft: '1rem',
            textDecoration: 'none',
          }}
        >
          Add Book
        </a>
      </div>
    </div>
  )
}

export default Header