const book = {
  title: "lord of the rings",
  author: "JRR"
}
console.log(book);

book.title = "new title"

console.log(book);

const fieldToChange = "genre"

book[fieldToChange] = "fantasy"

console.log(book);

const fieldsToChange = ["title", "author", "genre"]
const newValueForAllFields = "__"


console.log(book);

for (let i = 0; i < fieldsToChange.length; i++) {
  let field = fieldsToChange[i]
  console.log("field", i, field)
  let bookFieldValue = book[field]
  console.log(bookFieldValue)
  book[field] = newValueForAllFields
}
console.log(book);
