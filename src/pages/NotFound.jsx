export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-extrabold text-blue-900 mb-4">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-500 max-w-md mb-8">
        The page you are looking for might be removed or temporarily unavailable.
      </p>

      <a
        href="/"
        className="px-8 py-3 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
