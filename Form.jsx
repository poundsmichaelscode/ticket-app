import { useState, useEffect } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });

  const [errors, setErrors] = useState({});

  // Load saved data from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("ticketForm"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Save data on change
  useEffect(() => {
    localStorage.setItem("ticketForm", JSON.stringify(formData));
  }, [formData]);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format.";
    if (!formData.avatar) tempErrors.avatar = "Avatar URL is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Conference Ticket Form</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Full Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      {/* Avatar URL */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Avatar URL</label>
        <input
          type="url"
          className="w-full p-2 border rounded"
          value={formData.avatar}
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
        />
        {errors.avatar && <p className="text-red-500">{errors.avatar}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Generate Ticket
      </button>
    </form>
  );
};

export default Form;
