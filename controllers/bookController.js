const bookModel = require('../models/bookModel');

exports.showBooks = (req, res) => {
  const books = bookModel.getAllBooks();
  res.render('bookList', { books });
};
