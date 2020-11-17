using System.Collections.Generic;
using System.Linq;
using BooksStore.Model;
using Dapper;
using Npgsql;

namespace BookStore.Service.Services.CategoryService
{
    public class CategoryService : ICategoryService
    {
        public List<Category> GetAllCategory()
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var categories = connection.Query<Category>("SELECT * FROM categories").ToList();
                return categories;
            }
        }

        public Category GetCategory(int id)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var category = connection.QueryFirstOrDefault<Category>("SELECT * FROM categories WHERE id = @id", new {id});
                return category;
            }
        }

        public string CreateCategory(Category category)
        {
            throw new System.NotImplementedException();
        }

        public Category UpdateCategory(Category newCategory)
        {
            throw new System.NotImplementedException();
        }
    }
}