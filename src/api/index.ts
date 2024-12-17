import { Product } from '../types';

const apiUrl = import.meta.env.VITE_API_URL;

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

const editProduct = async (changedProduct: Product) => {
  try {
    const response = await fetch(`${apiUrl}/products/${changedProduct?.id}`, {
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

export { createNewProduct, editProduct };
