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
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var books = connection.Query<Book>("SELECT * FROM books").ToList();
                return books;
            }
        }

        public Book GetBook(int id)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var book = connection.QueryFirstOrDefault<Book>("SELECT * FROM books WHERE id = @id", new {id});
                return book;
            }
        }

        public int ChangeBookQuantity(int id)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var quantity = connection.Execute("UPDATE books SET quantity = quantity-1 WHERE id = @id", new {id});
                return quantity;
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