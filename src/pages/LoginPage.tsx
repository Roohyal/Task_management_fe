import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          // Replace with your actual API endpoint
          const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert("Logged in successfully!");
            // Redirect to the dashboard or homepage
            window.location.href = "/dashboard";
          } else {
            const errorData = await response.json();
            alert(errorData.message || "Login failed.");
          }
        } catch (error) {
          console.error("Network error:", error);
          alert("Network error. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      };
    
    return(
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
              <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-blue"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-blue"
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold hover:bg-[#009FDD] flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l1.41 1.41A8 8 0 0120 12h4c0 6.627-5.373 12-12 12-2.41 0-4.651-.717-6.291-1.99l1.41-1.41z"
                        ></path>
                      </svg>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                  <div className="text-center text-gray-500 mt-4">
                    <p>
                      Don't have an account?{" "}
                      <Link to="/register" className="text-blue-400 hover:underline">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
    );
}
 export default LoginPage;