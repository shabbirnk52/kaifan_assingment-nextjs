interface ToastProps {
    message: string;
    onClose: () => void;
  }
  
  export default function Toast({ message, onClose }: ToastProps) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
        <div className="flex items-center justify-between">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>
      </div>
    )
  }