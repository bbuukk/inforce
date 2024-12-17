import React, { useState } from 'react';
import { Product } from '../types';

interface MutateProductModalProps {
  initProduct?: Product;
  onClose: () => void;
  onMutateProduct: (product: Product) => void;
}

const MutateProductModal: React.FC<MutateProductModalProps> = ({
  initProduct = {
    id: 0,
    imageUrl: '',
    name: '',
    count: 0,
    size: { width: 0, height: 0 },
    weight: '',
    comments: []
  },
  onClose,
  onMutateProduct
}) => {
  const [product, setProduct] = useState<Product>(initProduct);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      size: {
        ...prevProduct.size,
        [name]: Number(value)
      }
    }));
  };

  const handleAddProduct = () => {
    if (product.name && product.count > 0) {
      onMutateProduct(product);
      onClose();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/70">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Add New Product</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          className="mb-2 w-full rounded border border-gray-300 p-2"
          required
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={product.imageUrl}
          onChange={handleChange}
          className="mb-2 w-full rounded border border-gray-300 p-2"
        />

        <input
          type="number"
          name="count"
          placeholder="Count"
          value={product.count}
          onChange={handleChange}
          className="mb-2 w-full rounded border border-gray-300 p-2"
          required
        />

        <input
          type="number"
          name="width"
          placeholder="Width"
          value={product.size.width}
          onChange={handleSizeChange}
          className="mb-2 w-full rounded border border-gray-300 p-2"
        />

        <input
          type="number"
          name="height"
          placeholder="Height"
          value={product.size.height}
          onChange={handleSizeChange}
          className="mb-2 w-full rounded border border-gray-300 p-2"
        />

        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={product.weight}
          onChange={handleChange}
          className="mb-4 w-full rounded border border-gray-300 p-2"
        />

        <div className="flex justify-end">
          <button
            onClick={handleAddProduct}
            className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Confirm
          </button>

          <button
            onClick={onClose}
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MutateProductModal;
