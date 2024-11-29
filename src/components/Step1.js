import React, { useState } from "react";

const Step1 = ({ goNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      goNext();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto md:max-w-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-marineBlue text-2xl font-bold">Personal Info</h1>
      <p className="text-coolGray mt-2">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-4">
        <label className="block text-sm font-medium text-marineBlue">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full mt-1 p-2 border rounded-md ${
            errors.name ? "border-red-500" : "border-lightGray"
          }`}
          placeholder="e.g. Stephen King"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-marineBlue">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full mt-1 p-2 border rounded-md ${
            errors.email ? "border-red-500" : "border-lightGray"
          }`}
          placeholder="e.g. stephenking@lorem.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-marineBlue">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full mt-1 p-2 border rounded-md ${
            errors.phone ? "border-red-500" : "border-lightGray"
          }`}
          placeholder="e.g. +1 234 567 890"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <button type="submit" className="bg-marineBlue text-white py-2 px-4 mt-4 rounded-lg">
        Next Step
      </button>
    </form>
  );
};

export default Step1;