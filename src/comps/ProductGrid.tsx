import { Product } from '../types';
import { FC, useState } from 'react';

import WarningModal from './WarningModal';

const apiUrl = import.meta.env.VITE_API_URL;

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  const [deleteProduct, setDeleteProduct] = useState<Product | null>(null);

  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(`${apiUrl}/products/${deleteProduct?.id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete a product');
      }

      const data = await response.json();
      //TODO: dispatch new product to global products state
    } catch (error) {
      console.error('Error deleting a product:', error);
      // TODO: display error to the user
    }
  };

  return (
    <>
      {deleteProduct && (
        <WarningModal
          callback={handleDeleteProduct}
          setIsModal={setDeleteProduct}
        />
      )}

      <ul
        className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {products.map((product, index) => (
          <li
            key={index}
            className="mb-2 flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
          >
            <span className="font-bold">
              {`${product.name} - ${product.count}`}
            </span>

            <button
              className="rounded bg-red-500 px-2 py-1 text-white"
              onClick={() => setDeleteProduct(product)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductGrid;
