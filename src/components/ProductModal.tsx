import React from 'react';

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    price: number;
    status: string;
    description: string;
    sellhubUrl: string;
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ open, onClose, product }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#18181b] rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-white text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center mb-4">
          <img src={product.image} alt={product.name} className="w-16 h-16 rounded mr-4 object-cover" />
          <div>
            <div className="text-lg font-semibold text-white">{product.name}</div>
            <div className="text-xs text-gray-400">{product.status}</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-blue-400 mb-2">{product.price}</div>
        <div className="bg-blue-900 text-blue-300 rounded p-2 mb-2">{product.status}</div>
        <div className="mb-4">
          <div className="text-gray-400 text-sm mb-1">Description:</div>
          <div className="bg-zinc-800 text-white rounded p-2 text-sm">
            {product.description || 'No Description Given'}
          </div>
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          onClick={() => window.open('https://aion.sellhub.cx/embed/payment/', '_blank')}
        >
          Select Payment Method →
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
