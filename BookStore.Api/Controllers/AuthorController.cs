using System;
using System.Collections.Generic;
using BooksStore.Model;
using BookStore.Service.Services.AuthorService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Api.Controllers
{
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorService _authorService;

        public AuthorController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet("/api/authors")]
        public ActionResult GetAllAuthors()
        {
            return Ok(_authorService.GetAllAuthors());
        }

        [HttpGet("/api/authors/{id}")]
        public ActionResult GetAuthor(int id)
        {
            return Ok(_authorService.GetAuthor(id));
        }
    }
}