using System.Collections.Generic;
using BooksStore.Model;

namespace BookStore.Service.Services.BookService
{
    public interface IBookService
    {
        public List<Book> GetAllBooks();
        public Book GetBook(int id);
        public List<Book> GetBookByCategory(int categoryId);
        public List<Book> GetBookByAuthor(int authorId);
        public string CreateBook(Book book);
        public Book UpdateBook(Book newBook);
    }
}