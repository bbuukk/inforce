import { editProduct } from '../api';
import MutateProductModal from '../comps/MutateProductModal';
import useGetProduct from '../hooks/useGetProduct';
import { Modals } from '../utils/enums';

function LandingProduct() {
  const { product, activeModal, openModal, closeModal } = useGetProduct();

  if (!product) {
    // TODO: introduce better UI/UX for loading state
    return <div>Loading...</div>;
  }

  return (
    <>
      {activeModal === Modals.MUTATE_PRODUCT && (
        <MutateProductModal
          initProduct={product}
          onClose={closeModal}
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
              onClick={() => openModal(Modals.MUTATE_PRODUCT)}
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
