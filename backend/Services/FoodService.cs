using System.Collections.Generic;
using System.Linq;
using backend.Models;
using backend.Data;

namespace backend.Services
{
    public class FoodService
    {
        private readonly RestaurantDbContext _context;

        public FoodService(RestaurantDbContext context)
        {
            _context = context;
        }

        public List<Food> GetAllFoods()
        {
            return _context.Foods.ToList();
        }

        public void AddFood(Food food)
        {
            _context.Foods.Add(food);
            _context.SaveChanges();
     
        }
        public void UpdateFood(int id, Food food)
        {
            var existingFood = _context.Foods.Find(id);
            if (existingFood != null)
            {
                existingFood.Name = food.Name;
                existingFood.Price = food.Price;
                _context.SaveChanges();
            }
        }

        public void DeleteFood(int id)
        {
            var food = _context.Foods.Find(id);
            if (food != null)
            {
                _context.Foods.Remove(food);
                _context.SaveChanges();
            }
        }

    }
}
