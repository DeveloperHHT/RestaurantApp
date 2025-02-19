using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Services;
using System.Collections.Generic;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly FoodService _foodService;

        public FoodController(FoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpGet]
        public IActionResult GetAllFoods()
        {
            var foods = _foodService.GetAllFoods();
            return Ok(foods);
        }

        [HttpPost]
        public IActionResult AddFood([FromBody] Food food)
        {
            _foodService.AddFood(food);
            return Ok(new { message = "Food added successfully" });
        }

        [HttpPut("{id}")]
        public IActionResult UpdateFood(int id, [FromBody] Food food)
        {
            _foodService.UpdateFood(id, food);
            return Ok(new { message = "Food updated successfully" });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFood(int id)
        {
            _foodService.DeleteFood(id);
            return Ok(new { message = "Food deleted successfully" });
        }
    }
}
