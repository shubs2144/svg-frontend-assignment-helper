import React, { useState } from "react";

const Step3 = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addOns = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: "$1/mo",
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "$2/mo",
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "$2/mo",
    },
  ];

  const toggleAddOn = (name) => {
    setSelectedAddOns((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((addOn) => addOn !== name)
        : [...prevSelected, name]
    );
  };

  return (
    <div>
      <h1 className="text-marineBlue text-2xl font-bold">Pick add-ons</h1>
      <p className="text-coolGray mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="flex flex-col gap-4 mt-6">
        {addOns.map((addOn) => (
          <div
            key={addOn.name}
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${
              selectedAddOns.includes(addOn.name)
                ? "border-purplishBlue bg-lightBlue"
                : "border-lightGray"
            }`}
            onClick={() => toggleAddOn(addOn.name)}
          >
            <input
              type="checkbox"
              className="w-5 h-5 mr-4 accent-purplishBlue cursor-pointer"
              checked={selectedAddOns.includes(addOn.name)}
              onChange={() => toggleAddOn(addOn.name)}
            />
            <div className="flex-1">
              <h2
                className={`text-lg font-bold ${
                  selectedAddOns.includes(addOn.name)
                    ? "text-marineBlue"
                    : "text-coolGray"
                }`}
              >
                {addOn.name}
              </h2>
              <p className="text-coolGray">{addOn.description}</p>
            </div>
            <p className="text-purplishBlue font-bold">{addOn.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;