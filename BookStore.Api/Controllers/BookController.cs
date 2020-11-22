using System;
using System.Collections.Generic;
using BookStore.Api.ViewModel;
using BookStore.Service.Services.AuthorService;
using BookStore.Service.Services.BookService;
using BookStore.Service.Services.CategoryService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Api.Controllers
{
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        private readonly ICategoryService _categoryService;
        private readonly IAuthorService _authorService;

        public BookController(IBookService bookService, ICategoryService categoryService, IAuthorService authorService)
        {
            _bookService = bookService;
            _categoryService = categoryService;
            _authorService = authorService;
        }

        [Authorize]
        [HttpGet("/api/books")]
        public ActionResult GetAllBooks()
        {
            var books = _bookService.GetAllBooks();
            List<BookModel> booksM = new List<BookModel>();
            foreach (var book in books)
            {
                var category = _categoryService.GetCategory(book.CategoryId);
                var author = _authorService.GetAuthor(book.AuthorId);
                var bookModel = new BookModel()
                {
                    Id = book.Id,
                    Title = book.Title,
                    Description = book.Description,
                    Quantity = book.Quantity,
                    Price = book.Price,
                    Category = category,
                    Author = author
                };
                booksM.Add(bookModel);
            }
            return Ok(booksM);
        }
        
        [HttpGet("/api/books/{id}")]
        public ActionResult GetBook(int id)
        {
            try
            {
                var book = _bookService.GetBook(id);
                var category = _categoryService.GetCategory(book.CategoryId);
                var author = _authorService.GetAuthor(book.AuthorId);
                var bookModel = new BookModel()
                {
                    Id = book.Id,
                    Title = book.Title,
                    Description = book.Description,
                    Quantity = book.Quantity,
                    Price = book.Price,
                    Category = category,
                    Author = author
                };
                return Ok(bookModel);
            }
            catch (Exception e)
            {
                return NotFound(new
                {
                    message = e.StackTrace
                });
            }
        }
    }
}