using BookStore.Service.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Api.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [Authorize]
        [HttpGet("/api/user/current")]
        public ActionResult GetCurrentUser()
        {
            var userId = int.Parse(User.FindFirst("id").Value);
            return Ok(_userService.GetUser(userId));
        }
    }
}