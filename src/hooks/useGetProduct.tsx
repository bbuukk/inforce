import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types';
import useModal from './useModal';

const apiUrl = import.meta.env.VITE_API_URL;

function useGetProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { activeModal, openModal, closeModal } = useModal();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/${id}`);

        if (!response.ok) {
          throw new Error('Failed to get product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        // TODO: display error to the user
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, activeModal, openModal, closeModal };
}

export default useGetProduct;
