using BooksStore.Model;

namespace BookStore.Api.ViewModel
{
    public class BookModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public Author Author { get; set; }
        public Category Category { get; set; }
    }
}