using backend.Models;
using backend.Repositories;
using System.Collections.Generic;

namespace backend.Services
{
    public class ProductService
    {
        private readonly ProductRepository _repository;

        public ProductService(ProductRepository repository)
        {
            _repository = repository;
        }

        public List<Product> GetAllProducts()
        {
            return _repository.GetAll();
        }

        public Product? GetProductById(int id)  // ❗ `Product?` ile null dönebilir belirtiyoruz
        {
            return _repository.GetById(id);
        }


        public void AddProduct(Product product)
        {
            _repository.Add(product);
        }
        public Product? UpdateProduct(int id, Product updatedProduct)
        {
            var existingProduct = _repository.GetById(id);
            if (existingProduct == null)
            {
                return null; // Ürün yoksa null döndür
            }

            existingProduct.Name = updatedProduct.Name;
            existingProduct.Price = updatedProduct.Price;

            _repository.Update(existingProduct);
            return existingProduct; // Güncellenmiş ürünü döndür
        }



        public bool DeleteProduct(int id)  // ❗ `void` yerine `bool` döndürüyoruz
        {
            var product = _repository.GetById(id);
            if (product == null) return false; // Ürün yoksa false döndür

            _repository.Delete(id);
            return true; // Ürün silindiyse true döndür
        }

    }
}
