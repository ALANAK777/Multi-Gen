import React from "react";

function Billing() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center mt-10">
        Upgrade with plan
      </h2>
      <div className="flex gap-8 p-8 justify-center">
        <div className="border rounded-lg p-8 shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Free Plan</h2>
          <ul className="list-none p-0">
            <li className="mb-2">10,000 words/month</li>
            <li className="mb-2">50+ Content Template</li>
            <li className="mb-2">Unlimited Download & Copy</li>
            <li className="mb-2">1 month of history</li>
          </ul>
        </div>
        <div className="border rounded-lg p-8 shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Monthly Plan</h2>
          <ul className="list-none p-0">
            <li className="mb-2">100,000 words/month</li>
            <li className="mb-2">50+ Content Template</li>
            <li className="mb-2">Unlimited Download & Copy</li>
            <li className="mb-2">1 year of history</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Billing;
