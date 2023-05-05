
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

function generateIntegerID(min = 10000, max = 1000000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function handleViewButtonClick(id, onSelectBook) {
  console.log("Book ID:", id);
  onSelectBook(id)
}

const xmlToJson = async (xml) => {
  try {
    const result = await parseStringPromise(xml);
    return result;
  } catch (error) {
    console.error('Error parsing XML:', error);
    return null;
  }
};


const converter = async (data) => {
  const json = await xmlToJson(data);
  return json;
};



export{
  parseTextData,
  handleViewButtonClick,
  generateIntegerID,
  converter
}