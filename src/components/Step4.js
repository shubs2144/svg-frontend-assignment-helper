import React from "react";

const Step4 = ({ plan = {}, addOns = [], goBack, confirm }) => {
  const totalPrice = addOns.reduce(
    (acc, addOn) => {
      const addOnPrice = parseFloat(addOn.price?.replace("$", "") || 0);
      return acc + addOnPrice;
    },
    parseFloat(plan.price?.replace("$", "") || 0)
  );

  return (
    <div>
      <h1 className="text-marineBlue text-2xl font-bold">Finishing up</h1>
      <p className="text-coolGray mt-2">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-lightBlue p-4 mt-6 rounded-lg">
        <div className="flex justify-between items-center pb-4 border-b border-lightGray">
          <div>
            <h2 className="text-marineBlue font-bold">{`${plan.name || "Plan"} (${
              plan.frequency || "Monthly"
            })`}</h2>
            <button
              className="text-coolGray underline text-sm"
              onClick={() => goBack(2)}
            >
              Change
            </button>
          </div>
          <p className="text-marineBlue font-bold">{plan.price || "$0"}</p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {addOns.map((addOn) => (
            <div key={addOn.name} className="flex justify-between">
              <p className="text-coolGray">{addOn.name}</p>
              <p className="text-marineBlue">{addOn.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-coolGray">Total (per month)</p>
        <p className="text-purplishBlue font-bold text-xl">{`+$${totalPrice.toFixed(
          2
        )}/mo`}</p>
      </div>

      {/* <div className="flex justify-between items-center mt-8">
        <button
          className="text-coolGray font-bold hover:underline"
          onClick={() => goBack(3)}
        >
          Go Back
        </button>
        <button
          className="bg-purplishBlue text-white px-6 py-2 rounded-lg font-bold"
          onClick={confirm}
        >
          Confirm
        </button>
      </div> */}
    </div>
  );
};

export default Step4;