import { useEffect, useState } from 'react';
import { RootState } from '../store/store';
import { Product } from '../types';
import MutateProductModal from '../comps/MutateProductModal';

import { useSelector, useDispatch } from 'react-redux';
import { Modals } from '../utils/enums';
import { setActiveModal } from '../store/globalUISlice';
import ProductGrid from '../comps/ProductGrid';

const apiUrl = import.meta.env.VITE_API_URL;

function ListingProducts() {
  const activeModal = useSelector(
    (state: RootState) => state.globalUI.activeModal
  );
  const dispatch = useDispatch();

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

  const createNewProduct = async (newProduct: Product) => {
    try {
      const response = await fetch(`${apiUrl}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });

      if (!response.ok) {
        throw new Error('Failed to post new product');
      }

      const data = await response.json();
      console.log(data);
      //TODO: dispatch new product to global products state
    } catch (error) {
      console.error('Error posting product:', error);
      // TODO: display error to the user
    }
  };

  return (
    <>
      {activeModal === Modals.MUTATE_PRODUCT && (
        <MutateProductModal
          onClose={() => dispatch(setActiveModal(null))}
          onMutateProduct={(p) => createNewProduct(p)}
        />
      )}

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={() => dispatch(setActiveModal(Modals.MUTATE_PRODUCT))}
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

        <ProductGrid products={sortedProducts} />
      </div>
    </>
  );
}

export default ListingProducts;
