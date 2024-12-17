import { Product } from '../types';
import { FC } from 'react';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  // const deleteProduct = async () => {
  //   try {
  //     const response = await fetch(`${apiUrl}/products`, {
  //       method: 'DELETE'
  //     });
  //
  //     if (!response.ok) {
  //       throw new Error('Failed to delete a product');
  //     }
  //
  //     const data = await response.json();
  //     console.log(data);
  //     //TODO: dispatch new product to global products state
  //   } catch (error) {
  //     console.error('Error posting product:', error);
  //     // TODO: display error to the user
  //   }
  // };
  //

  return (
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
            onClick={() => { }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductGrid;
