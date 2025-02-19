using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var products = _productService.GetAllProducts();
            return Ok(products);
        }

        [HttpPost]
        public IActionResult AddProduct([FromBody] Product product)
        {
            _productService.AddProduct(product);
            return Ok(product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, [FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest("Geçersiz ürün verisi.");
            }

            var updatedProduct = _productService.UpdateProduct(id, product);
            if (updatedProduct == null)
            {
                return NotFound($"ID {id} ile eşleşen ürün bulunamadı.");
            }

            return Ok(updatedProduct);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            bool deleted = _productService.DeleteProduct(id); // `bool` türü olarak kontrol edilecek
            if (!deleted) return NotFound(new { message = "Ürün bulunamadı!" });
            return Ok(new { message = "Ürün başarıyla silindi!" });
        }

    }  // ✅ Burada eksik } olabilir, bunu eklediğinden emin ol!
}
