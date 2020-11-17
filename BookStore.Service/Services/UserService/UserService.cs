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
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var category = connection.Query<User>("SELECT * FROM users").ToList();
                return category;
            }
        }

        public User GetUser(int id)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var category = connection.QueryFirstOrDefault<User>("SELECT * FROM users WHERE id = @id", new {id});
                return category;
            }
        }

        public User GetUserByEmail(string email)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var user = connection.QueryFirstOrDefault<User>("SELECT * FROM users WHERE email = @email", new {email});
                return user;
            }
        }

        public int CreateUser(User newUser)
        {
            using (var connection = new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var id = connection.Execute("INSERT INTO users (\"Email\", \"Password\", \"FirstName\", \"LastName\", \"Address\") VALUES (@email, @password, @firstName, @lastName, @address) Returning(\"Id\")",
                new {
                   newUser.Email,
                   newUser.Password,
                   newUser.FirstName,
                   newUser.LastName,
                   newUser.Address
                });
                return id;
            }
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