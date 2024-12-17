import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Modals } from '../utils/enums';
import { setActiveModal } from '../store/globalUISlice';

function useModal() {
  const activeModal = useSelector(
    (state: RootState) => state.globalUI.activeModal
  );
  const dispatch = useDispatch();

  const openModal = (modalType: Modals) => dispatch(setActiveModal(modalType));
  const closeModal = () => dispatch(setActiveModal(null));

  return { activeModal, openModal, closeModal };
}

export default useModal;
