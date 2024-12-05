

const ErrorPage: React.FC = () => {
    return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
      >
        Go to Homepage
      </button>
    </div>
    );
};
 export default ErrorPage;