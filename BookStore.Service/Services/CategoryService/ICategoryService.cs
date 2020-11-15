using System.Collections.Generic;
using BooksStore.Model;

namespace BookStore.Service.Services.CategoryService
{
    public interface ICategoryService
    {
        public List<Category> GetAllCategory();
        public Category GetCategory(int id);
        public string CreateCategory(Category category);
        public Category UpdateCategory(Category newCategory);
    }
}