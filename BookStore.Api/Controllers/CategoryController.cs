using BookStore.Service.Services.CategoryService;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Api.Controllers
{
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("/api/category")]
        public ActionResult GetAllCategories()
        {
            return Ok(_categoryService.GetAllCategory());
        }
    }
}