using System;
using System.Collections.Generic;
using BooksStore.Model;

namespace BookStore.Api.ViewModel
{
    public class OrderDetailModel_
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public OrderStatus Status { get; set; }
        public List<OrderDetailItemModel> OrderItems { get; set; }
        public DateTime Created { get; set; }
    }

    public class OrderDetailItemModel
    {
        public int Id { get; set; }
        public BookModel Book { get; set; }
        public int Quantity { get; set; }
    }
}