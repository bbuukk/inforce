import { FC } from 'react';

type Props = {
  setIsModal: (value: null) => void;
  callback: () => void;
};

const WarningModal: FC<Props> = ({ setIsModal, callback }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600/50">
      <div className="rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-bold">Delete Product</h2>

        <p className="text-center">
          This action is <span className="text-red-400">permanent</span>
          <br />
          Are you sure?
        </p>

        <div className="mt-4 flex justify-end">
          <button
            className="mr-2 rounded bg-red-500 px-4 py-2 text-white"
            onClick={() => {
              callback();
              setIsModal(null);
            }}
          >
            Confirm
          </button>

          <button
            className="rounded bg-gray-300 px-4 py-2 text-black"
            onClick={() => setIsModal(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
