using System.Collections.Generic;
using System.Linq;
using BooksStore.Model;
using Dapper;
using Npgsql;

namespace BookStore.Service.Services.OrderService
{
    public class OrderService : IOrderService
    {
        public List<Order> GetAllUserOrders(int userId)
        {
            using (var connection =
                new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var orders = connection.Query<Order>("SELECT * FROM orders WHERE \"userId\" = @userId", new {userId})
                    .ToList();

                foreach (var order in orders)
                {
                    var orderItems =
                        connection.Query<OrderItem>(
                            "SELECT * FROM \"ordersItem\" Where \"orderId\" = @orderId",
                            new {orderId = order.Id}
                        ).ToList();

                    order.OrderItems = orderItems;
                }

                return orders;
                ;
            }
        }

        public Order GetOrder(int id)
        {
            using (var connection =
                new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var order = connection.QueryFirstOrDefault<Order>(
                    "SELECT * FROM orders WHERE id = @id",
                    new {id}
                );

                var orderItems = connection.Query<OrderItem>(
                    "SELECT * FROM \"ordersItem\" Where \"orderId\" = @orderId",
                    new {orderId = order.Id}
                ).ToList();

                order.OrderItems = orderItems;
                return order;
            }
        }

        public string CreateOrder(Order newOrder)
        {
            using (var connection =
                new NpgsqlConnection("Host=localhost;Port=5432;Username=solardev;Password=solar123;Database=books;"))
            {
                var orderId = connection.QueryFirst<int>(
                    "INSERT INTO orders (\"userId\") VALUES (@userId) RETURNING id",
                    new {newOrder.UserId});

                foreach (var item in newOrder.OrderItems)
                {
                    connection.Execute(
                        "INSERT INTO \"ordersItem\" (\"orderId\", \"bookId\", quantity) VALUES (@orderId, @bookId, @quantity)",
                        new {orderId, item.BookId, item.Quantity});
                }

                return orderId.ToString();
            }
        }

        public Order UpdateOrder(Order updatedOrder)
        {
            throw new System.NotImplementedException();
        }
    }
}