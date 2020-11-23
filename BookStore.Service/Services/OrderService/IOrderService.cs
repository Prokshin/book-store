using System.Collections.Generic;
using BooksStore.Model;

namespace BookStore.Service.Services.OrderService
{
    public interface IOrderService
    {
        public List<Order> GetAllUserOrders(int userId);
        public Order GetOrder(int id);
        public string CreateOrder(Order newOrder);
        public int UpdateOrder(int id, int status);
    }
}