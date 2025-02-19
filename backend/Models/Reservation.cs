using System.ComponentModel.DataAnnotations;
public class Reservation
{
    public int Id { get; set; }

    [Required]
    public string CustomerName { get; set; } = string.Empty;

    [Required]
    public DateTime Date { get; set; }  // 📌 Eksik alan eklendi
}
