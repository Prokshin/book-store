namespace BooksStore.Model
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int AuthorId { get; set; }
        public int Quantity { get; set; }
    }
}