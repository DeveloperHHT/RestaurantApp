using System;

namespace backend.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int FoodId { get; set; }
        public Food Food { get; set; }
        public int Quantity { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
