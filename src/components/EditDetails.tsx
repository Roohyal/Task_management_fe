import React, { useState } from "react";

interface PersonData {
  firstName: string;
  lastName: string;
}

const EditDetails: React.FC = () => {
  const [formData, setFormData] = useState<PersonData>({
    firstName: "",
    lastName: "",
  });
  const token = localStorage.getItem("token");

  const [isSubmitting, setIsSubmitting] = useState(false);  // Correct state for form submission status
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitting(true); // Set to true when submission starts

    try {
      // Replace with your actual API endpoint
      const response = await fetch("http://localhost:8080/api/person/update-person", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          alert("Task Created!");
          console.log(formData);
        }, 2000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Update Failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
      setIsSubmitting(false); // Set back to false after the request is finished
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
              First Name
            </label>
            <input
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-lg font-semibold hover:bg-blue-500 flex items-center justify-center"
            disabled={isSubmitting}  // Disable the button while submitting
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
              "Update Details"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
