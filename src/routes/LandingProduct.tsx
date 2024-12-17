import { useEffect, useState } from 'react';
import { Product } from '../types';
import { useParams } from 'react-router-dom';

import { RootState } from '../store/store';

import { useSelector, useDispatch } from 'react-redux';
import { Modals } from '../utils/enums';
import { setActiveModal } from '../store/globalUISlice';
import MutateProductModal from '../comps/MutateProductModal';

const apiUrl = import.meta.env.VITE_API_URL;

function LandingProduct() {
  const activeModal = useSelector(
    (state: RootState) => state.globalUI.activeModal
  );
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/${id}`);

        if (!response.ok) {
          throw new Error('Failed to get products');
        }
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        //TODO: display error to the user
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [id]);

  const editProduct = async (changedProduct: Product) => {
    try {
      const response = await fetch(`${apiUrl}/products/${product?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(changedProduct)
      });

      if (!response.ok) {
        throw new Error('Failed to edit product');
      }

      const data = await response.json();
      console.log(data);
      //TODO: dispatch new product to global products state
    } catch (error) {
      console.error('Error edit the product:', error);
      // TODO: display error to the user
    }
  };

  if (!product) {
    //TODO: introduce better ui/ux for loading state
    return <div>Loading...</div>;
  }

  return (
    <>
      {activeModal === Modals.MUTATE_PRODUCT && (
        <MutateProductModal
          initProduct={product}
          onClose={() => dispatch(setActiveModal(null))}
          onMutateProduct={(p) => editProduct(p)}
        />
      )}

      <div className="fixed inset-0 flex items-center">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
          <img
            className="h-48 w-full object-cover"
            src={product.imageUrl}
            alt={product.name}
          />

          <div className="p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>

            <p>Count: {product.count}</p>

            <p>{`Size: ${product.size.width} x ${product.size.height}`}</p>

            <p>Weight: {product.weight}</p>

            <button
              className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
              onClick={() => dispatch(setActiveModal(Modals.MUTATE_PRODUCT))}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingProduct;
