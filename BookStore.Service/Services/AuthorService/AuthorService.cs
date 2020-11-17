using System.Collections.Generic;
using System.Data;
using System.Linq;
using BooksStore.Model;
using Dapper;
using Npgsql;

namespace BookStore.Service.Services.AuthorService
{
    public class AuthorService : IAuthorService
    {
        public List<Author> GetAllAuthors()
        {
            using var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;");
            var authors = connection.Query<Author>("SELECT * FROM authors").ToList();
            return authors;
        }

        public Author GetAuthor(int id)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var author = connection.QueryFirstOrDefault<Author>("SELECT * FROM authors WHERE id = @id", new {id});
                return author;
            }
        }

        public string CreateAuthor(Author author)
        {
            throw new System.NotImplementedException();
        }

        public Author UpdateAuthor(Author newAuthor)
        {
            throw new System.NotImplementedException();
        }
    }
}