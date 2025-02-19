using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class RestaurantDbContext : DbContext
    {
        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options) : base(options) { }

        public DbSet<Food> Foods { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
    }
}
