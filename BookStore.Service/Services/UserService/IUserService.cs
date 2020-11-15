using BooksStore.Model;

namespace BookStore.Service.Services.UserService
{
    public interface IUserService
    {
        public User GetUser(int id);
        public int CreateUser(User newUser);
        public User UpdateUser(User updatedUser);
        public string GetToken(string email, string password);
    }
}