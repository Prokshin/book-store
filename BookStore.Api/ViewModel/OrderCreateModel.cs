using System.Collections.Generic;

namespace BookStore.Api.ViewModel
{
    public class OrderCreateModel
    {
        public int UserId { get; set; }
        public List<OrderItmeCreateModel> Items { get; set; }
    }
    
    public class OrderItmeCreateModel
    {
        public int BookId { get; set; }
        public int Quantity { get; set; }
    }

    public class OrderUpdateModel
    {
        public int Status { get; set; }
    }
}