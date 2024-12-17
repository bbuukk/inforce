import MutateProductModal from '../comps/MutateProductModal';

import { Modals } from '../utils/enums';
import ProductGrid from '../comps/ProductGrid';
import useGetProducts from '../hooks/useGetProducts';
import useModal from '../hooks/useModal';
import { createNewProduct } from '../api';

function ListingProducts() {
  const { sortedProducts, sortOption, setSortOption } = useGetProducts();
  const { activeModal, openModal, closeModal } = useModal();

  return (
    <>
      {activeModal === Modals.MUTATE_PRODUCT && (
        <MutateProductModal
          onClose={() => closeModal()}
          onMutateProduct={(p) => createNewProduct(p)}
        />
      )}

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={() => openModal(Modals.MUTATE_PRODUCT)}
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
