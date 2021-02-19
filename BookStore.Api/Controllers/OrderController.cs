using System.Collections.Generic;
using System.Linq;
using BooksStore.Model;
using BookStore.Api.ViewModel;
using BookStore.Service.Services.AuthorService;
using BookStore.Service.Services.BookService;
using BookStore.Service.Services.CategoryService;
using BookStore.Service.Services.OrderService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Api.Controllers
{
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IBookService _bookService;
        private readonly ICategoryService _categoryService;
        private readonly IAuthorService _authorService;

        public OrderController(IOrderService orderService, IBookService bookService,  ICategoryService categoryService, IAuthorService authorService)
        {
            _orderService = orderService;
            _bookService = bookService;
            _categoryService = categoryService;
            _authorService = authorService;
        }

        [Authorize]
        [HttpGet("/api/orders/")]
        public ActionResult GetAllOrders()
        {
            var userId = int.Parse(User.FindFirst("id").Value);
            return Ok(_orderService.GetAllUserOrders(userId));
        }

        [Authorize]
        [HttpGet("/api/orders/{id}")]
        public ActionResult GetOrder(int id)
        {
            // var userId = int.Parse(User.FindFirst("id").Value);
            var order = _orderService.GetOrder(id);
            return Ok();
        }
        
        [HttpGet("/api/orders/{id}/detail")]
        public ActionResult GetOrderDetail(int id)
        {
            // var userId = int.Parse(User.FindFirst("id").Value);
            var order = _orderService.GetOrder(id);
            var res = new OrderDetailModel_()
            {
                Id = order.Id,
                UserId = order.UserId,
                Status = order.Status,
                Created = order.Created,
                OrderItems = new List<OrderDetailItemModel>()
            };

            foreach (var item in order.OrderItems)
            {
                var book = _bookService.GetBook(item.BookId);
                var category = _categoryService.GetCategory(book.CategoryId);
                var author = _authorService.GetAuthor(book.AuthorId);
                res.OrderItems.Add(new OrderDetailItemModel()
                {
                    Id = item.Id,
                    Quantity = item.Quantity,
                    Book = new BookModel()
                    {
                        Id = book.Id,
                        Title = book.Title,
                        Description = book.Description,
                        Price = book.Price,
                        Quantity = book.Quantity,
                        Category = category,
                        Author = author
                    },
                });
            }

            return Ok(res);
        }

        
        [HttpPost("/api/orders/")]
        public ActionResult CreateOrder([FromBody] OrderCreateModel gg)
        {
            // var userId = int.Parse(User.FindFirst("id").Value);
            // var order = _orderService.GetOrder(id);
            // List<OrderItem> items = null;
            var items = gg.Items.Select(item => new OrderItem {BookId = item.BookId, Quantity = item.Quantity})
                .ToList();

            for (int i = 0; i < gg.Items.Count; i++)
            {
                _bookService.ChangeBookQuantity(gg.Items[i].BookId);
            }
            
            
            
            var f = _orderService.CreateOrder(new Order
            {
                UserId = gg.UserId,
                OrderItems = items
            });
            return Ok(f);
        }
        
        [HttpPatch("/api/orders/{id}")]
        public ActionResult UpdateOrderStatus(int id, [FromBody] OrderUpdateModel status)
        {
            return Ok(_orderService.UpdateOrder(id, status.Status));
        }
    }
}