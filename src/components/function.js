
function parseTextData(textData) {
  const books = [];
  const bookStrings = textData.trim().split(/\n\n+/); // Split by multiple newline characters

  bookStrings.forEach((bookString) => {
    const lines = bookString.split('\n');
    const book = {};

    lines.forEach((line) => {
      const [key, value] = line.split(': ');
      if (key && value) {
        book[key.toLowerCase()] = value;
      }
    });

    books.push(book);
  });

  return books;
}

function handleViewButtonClick(id, onSelectBook) {
  console.log("Book ID:", id);
  onSelectBook(id)
}



export{
  parseTextData,
  handleViewButtonClick,
}