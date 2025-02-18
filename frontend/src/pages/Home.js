import React, { useEffect, useState } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../api/api";
import { 
    Container, TextField, Button, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, 
    DialogContent, DialogTitle 
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });
  const [editingProduct, setEditingProduct] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await getProducts();
    setProducts(Array.isArray(data) ? data : []);
  };

  const handleAddProduct = async () => {
    if (newProduct.name && newProduct.price > 0) {
      await addProduct(newProduct);
      setNewProduct({ name: "", price: 0 });
      fetchProducts();
    }
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setOpen(true);
  };

  const handleUpdateProduct = async () => {
    if (editingProduct) {
      await updateProduct(editingProduct);
      setEditingProduct(null);
      setOpen(false);
      fetchProducts();
    }
  };

  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: "center" }}>📌 Restoran Ürün Yönetimi</h1>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Ürün Adı</b></TableCell>
              <TableCell><b>Fiyat</b></TableCell>
              <TableCell><b>İşlemler</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}₺</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleEditProduct(product)}>
                    <Edit /> Düzenle
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteProduct(product.id)}>
                    <Delete /> Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>Yeni Ürün Ekle</h2>
      <TextField label="Ürün Adı" fullWidth value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
      <TextField label="Fiyat" fullWidth type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} />
      <Button variant="contained" color="primary" onClick={handleAddProduct}>Ekle</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Ürünü Güncelle</DialogTitle>
        <DialogContent>
          <TextField label="Ürün Adı" fullWidth value={editingProduct?.name || ""} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} />
          <TextField label="Fiyat" fullWidth type="number" value={editingProduct?.price || 0} onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>İptal</Button>
          <Button onClick={handleUpdateProduct} color="success">Güncelle</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;
