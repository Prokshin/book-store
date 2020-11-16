using System.Collections.Generic;
using System.Linq;
using BooksStore.Model;
using Dapper;
using Npgsql;

namespace BookStore.Service.Services.BookService
{
    public class BookService : IBookService
    {
        public List<Book> GetAllBooks()
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=test_gg;"))
            {
                var books = connection.Query<Book>("SELECT * FROM books").ToList();
                return books;
            }
        }

        public Book GetBook(int id)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=test_gg;"))
            {
                var book = connection.QueryFirstOrDefault<Book>("SELECT * FROM books WHERE \"Id\" = @id", new {id});
                return book;
            }
        }

        public List<Book> GetBookByCategory(int categoryId)
        {
            throw new System.NotImplementedException();
        }

        public List<Book> GetBookByAuthor(int authorId)
        {
            throw new System.NotImplementedException();
        }

        public string CreateBook(Book book)
        {
            throw new System.NotImplementedException();
        }

        public Book UpdateBook(Book newBook)
        {
            throw new System.NotImplementedException();
        }
    }
}