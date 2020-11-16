using System.Collections.Generic;
using Microsoft.VisualBasic;

namespace BooksStore.Model
{
    public class Order
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public OrderStatus Status { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        public DateFormat Created { get; set; }
    }
}