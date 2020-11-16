using System.Collections.Generic;
using BooksStore.Model;

namespace BookStore.Service.Services.UserService
{
    public interface IUserService
    {
        public List<User> GetAllUsers();
        public User GetUser(int id);

        public User GetUserByEmail(string email);
        public int CreateUser(User newUser);
        public User UpdateUser(User updatedUser);
        public string GetToken(string email, string password);
    }
}