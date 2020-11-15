using System.Collections.Generic;
using BooksStore.Model;

namespace BookStore.Service.Services.AuthorService
{
    public interface IAuthorService
    {
        public List<Author> GetAllAuthors();
        public Author GetAuthor(int id);
        public string CreateAuthor(Author author);
        public Author UpdateAuthor(Author newAuthor);
    }
}