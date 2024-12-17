import { useEffect, useState } from 'react';
import { Product } from '../types';

const apiUrl = import.meta.env.VITE_API_URL;

function ListingProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState('alphabetical');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        //TODO: display error to the user
      }
    };
    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else {
      return b.count - a.count;
    }
  });

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => {}}
        >
          Add Product
        </button>

        <select
          className="rounded border px-2 py-1"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="alphabetical">Alphabetical</option>

          <option value="count">By Count</option>
        </select>
      </div>

      <ul
        className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {sortedProducts.map((product, index) => (
          <li
            key={index}
            className="mb-2 flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
          >
            <span className="font-bold">
              {`${product.name} - ${product.count}`}
            </span>

            <button
              className="rounded bg-red-500 px-2 py-1 text-white"
              onClick={() => {}}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListingProducts;
