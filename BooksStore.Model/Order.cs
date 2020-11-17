using System;
using System.Collections.Generic;
using Microsoft.VisualBasic;

namespace BooksStore.Model
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public OrderStatus Status { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        public DateTime Created { get; set; }
    }
}