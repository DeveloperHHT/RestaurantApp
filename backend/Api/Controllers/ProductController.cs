using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using backend.Models;
using backend.Services;

[Route("api/product")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductController(ProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Product>> GetProducts()
    {
        var products = _productService.GetAllProducts();
        return Ok(products ?? new List<Product>());
    }

    [HttpPost]
    public IActionResult AddProduct([FromBody] Product product)
    {
        _productService.AddProduct(product);
        return Ok(new { message = "Ürün eklendi!", product });
    }

    [HttpPut("{id}")]
    public IActionResult UpdateProduct(int id, [FromBody] Product product)
    {
        var updatedProduct = _productService.UpdateProduct(id, product);
        if (updatedProduct == null) return NotFound(new { message = "Ürün bulunamadı!" });
        return Ok(updatedProduct);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteProduct(int id)
    {
        var deleted = _productService.DeleteProduct(id);
        if (!deleted) return NotFound(new { message = "Ürün bulunamadı!" });
        return Ok(new { message = "Ürün silindi!" });
    }

}
