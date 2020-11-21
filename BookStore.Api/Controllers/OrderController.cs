using System.Collections.Generic;
using System.Linq;
using BooksStore.Model;
using BookStore.Api.ViewModel;
using BookStore.Service.Services.OrderService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Api.Controllers
{
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
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
        
        [Authorize]
        [HttpGet("/api/orders/{id}/detail")]
        public ActionResult GetOrderDetail(int id)
        {
            // var userId = int.Parse(User.FindFirst("id").Value);
            var order = _orderService.GetOrder(id);
            return Ok();
        }
        
        [Authorize]
        [HttpPost("/api/orders/")]
        public ActionResult CreateOrder([FromBody] OrderCreateModel gg )
        {
            // var userId = int.Parse(User.FindFirst("id").Value);
            // var order = _orderService.GetOrder(id);
            // List<OrderItem> items = null;
            var items = gg.Items.Select(item => new OrderItem {BookId = item.BookId, Quantity = item.Quantity}).ToList();

            var f = _orderService.CreateOrder(new Order
            {
                UserId = gg.UserId,
                OrderItems = items
            });
            return Ok(f);
        }
    }
}