export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-8">Page not found</h2>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg text-white font-medium transition-colors duration-200"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
