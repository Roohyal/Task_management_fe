import React, { useState } from "react";
import task from '../assets/undraw_completed_tasks_vs6q.svg';
import { Link } from "react-router-dom";



const RegisterPage : React.FC = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully!!, Kindly check your Email");
        // Redirect to confirmation page
        // window.location.href = "/confirmation/confirmation.html";
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to register user.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

    return (

        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row max-w-3xl mx-auto overflow-hidden">
          {/* Left Side */}
          <div className="w-full md:w-1/2 bg-blue-100 p-6 flex flex-col justify-center items-center rounded-l-2xl">
            <h2 className="text-color text-2xl font-bold mb-2">Boost Productivity</h2>
            <p className="text-color text-sm mb-4 text-center">
              Streamline your workflow, and achieve your goals faster than ever before.
            </p>
            <img
              src={task}
              alt="Productivity"
              className="rounded-lg shadow-md"
            />
          </div>
  
          {/* Right Side */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-xl font-bold mb-4">Create an Account</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              {[
                { label: "First Name", name: "firstName", type: "text" },
                { label: "Last Name", name: "lastName", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Password", name: "password", type: "password" },
                { label: "Confirm Password", name: "confirmPassword", type: "password" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    required
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-custom-blue"
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold hover:bg-[#009FDD] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 mx-auto"
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
                  "Sign Up"
                )}
              </button>
              <div className="text-center text-gray-500 mt-3">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-400  hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default RegisterPage;