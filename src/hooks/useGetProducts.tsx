import { useState, useEffect } from 'react';
import { Product } from '../types';

const apiUrl = import.meta.env.VITE_API_URL;

function useGetProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState('alphabetical');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);

        if (!response.ok) {
          throw new Error('Failed to get products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // TODO: display error to the user
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

  return { sortedProducts, sortOption, setSortOption, setProducts };
}

export default useGetProducts;
