import React, { useEffect, useState } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../api/api";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Ürünleri alırken hata oluştu:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      await addProduct(newProduct);
      setNewProduct({ name: "", price: 0 });
      fetchProducts();
    } catch (error) {
      console.error("Ürün eklerken hata oluştu:", error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, editingProduct);
        setEditingProduct(null);
        fetchProducts();
      }
    } catch (error) {
      console.error("Ürünü güncellerken hata oluştu:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Ürünü silerken hata oluştu:", error);
    }
  };

  return (
    <div>
      <h1>Admin Paneli</h1>

      <div>
        <h3>Yeni Ürün Ekle</h3>
        <input
          type="text"
          placeholder="Ürün Adı"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Fiyat"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
        <button onClick={handleAddProduct}>Ekle</button>
      </div>

      <div>
        <h3>Ürün Listesi</h3>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name} - {product.price} TL</p>
            <button onClick={() => setEditingProduct(product)}>Düzenle</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Sil</button>
          </div>
        ))}
      </div>

      {editingProduct && (
        <div>
          <h3>Ürünü Güncelle</h3>
          <input
            type="text"
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
          />
          <input
            type="number"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
          />
          <button onClick={handleUpdateProduct}>Güncelle</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
