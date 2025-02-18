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

        public void AddProduct(Product product)
        {
            _repository.Add(product);
        }

        public Product? UpdateProduct(int id, Product product)
        {
            var existingProduct = _repository.GetById(id);
            if (existingProduct == null) return null;

            existingProduct.Name = product.Name;
            existingProduct.Price = product.Price;
            _repository.Update(existingProduct);

            return existingProduct;
        }


        public bool DeleteProduct(int id)
        {
            var existingProduct = _repository.GetById(id);
            if (existingProduct == null) return false;

            _repository.Delete(id);
            return true;
        }
    }
}
