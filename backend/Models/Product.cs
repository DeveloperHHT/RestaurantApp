using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty; // Başlangıç değeri atandı

        [Required]
        public decimal Price { get; set; }
    }
}
