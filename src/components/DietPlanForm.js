import React from "react";
import { useNavigate } from "react-router-dom";

const DietPlanForm = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 overflow-auto">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-4xl relative text-white shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-3xl text-white hover:text-red-500"
        >
          &times;
        </button>

        {/* Form Title */}
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          PERSONALIZED DIET PLAN FORM
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Personal Details */}
          <fieldset className="border border-red-500 p-4 rounded">
            <legend className="text-red-400 font-bold">Personal Details</legend>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Age"
                className="p-2 rounded bg-gray-800 text-white"
              />
              <select className="p-2 rounded bg-gray-800 text-white">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                placeholder="Height (cm)"
                className="p-2 rounded bg-gray-800 text-white"
              />
              <input
                type="text"
                placeholder="Weight (kg)"
                className="p-2 rounded bg-gray-800 text-white"
              />
            </div>
          </fieldset>

          {/* Dietary Goals */}
          <fieldset className="border border-red-500 p-4 rounded">
            <legend className="text-red-400 font-bold">Dietary Goals</legend>
            <div>
              <select className="w-full p-2 rounded bg-gray-800 text-white">
                <option>Select Goal</option>
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>Maintenance</option>
              </select>
            </div>
          </fieldset>

          {/* Preferences & Restrictions */}
          <fieldset className="border border-red-500 p-4 rounded">
            <legend className="text-red-400 font-bold">
              Dietary Preferences & Restrictions
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Diet Type (e.g., Vegan, Keto)"
                className="p-2 rounded bg-gray-800 text-white"
              />
              <input
                type="text"
                placeholder="Food Allergies (if any)"
                className="p-2 rounded bg-gray-800 text-white"
              />
            </div>
          </fieldset>

          {/* Health Information */}
          <fieldset className="border border-red-500 p-4 rounded">
            <legend className="text-red-400 font-bold">Health Information</legend>
            <textarea
              placeholder="Health Concerns (e.g., Diabetes, Cholesterol)"
              className="w-full p-2 rounded bg-gray-800 text-white"
              rows="3"
            ></textarea>
          </fieldset>

          {/* Meal & Lifestyle Preferences */}
          <fieldset className="border border-red-500 p-4 rounded">
            <legend className="text-red-400 font-bold">
              Meal & Lifestyle Preferences
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Number of Meals per Day"
                className="p-2 rounded bg-gray-800 text-white"
              />
              <input
                type="text"
                placeholder="Cooking Preference"
                className="p-2 rounded bg-gray-800 text-white"
              />
            </div>
          </fieldset>

          {/* Current Eating Habits */}
          <fieldset className="border border-red-500 p-4 rounded">
            <legend className="text-red-400 font-bold">Current Eating Habits</legend>
            <textarea
              placeholder="Describe Your Eating Habits"
              className="w-full p-2 rounded bg-gray-800 text-white"
              rows="3"
            ></textarea>
          </fieldset>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
            onClick={(e)=>e.preventDefault()}
              type="submit"
              className="bg-red-600 py-2 px-6 rounded hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DietPlanForm;
