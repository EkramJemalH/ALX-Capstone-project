
export default function Error({ message = "Something went wrong!", onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ Error</h2>
      <p className="text-gray-700 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
}
