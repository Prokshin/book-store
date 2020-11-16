using System.Collections.Generic;
using System.Linq;
using BooksStore.Model;
using Dapper;
using Npgsql;

namespace BookStore.Service.Services.UserService
{
    public class UserService : IUserService
    {
        public List<User> GetAllUsers()
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=test_gg;"))
            {
                var category = connection.Query<User>("SELECT * FROM users").ToList();
                return category;
            }
        }

        public User GetUser(int id)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=test_gg;"))
            {
                var category = connection.QueryFirstOrDefault<User>("SELECT * FROM users WHERE \"Id\" = @id", new {id});
                return category;
            }
        }

        public User GetUserByEmail(string email)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=test_gg;"))
            {
                var user = connection.QueryFirstOrDefault<User>("SELECT * FROM users WHERE \"Id\" = @email", new {email});
                return user;
            }
        }

        public int CreateUser(User newUser)
        {
            throw new System.NotImplementedException();
        }

        public User UpdateUser(User updatedUser)
        {
            throw new System.NotImplementedException();
        }

        public string GetToken(string email, string password)
        {
            throw new System.NotImplementedException();
        }
    }
}