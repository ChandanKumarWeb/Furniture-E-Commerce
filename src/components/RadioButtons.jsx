import React, { useState } from "react";

function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [cardNumber, setCardNumber] = useState("");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    if (value !== "option2") {
      setCardNumber(""); // Clear card number when "Credit Card" is unselected
    }
  };

  return (
    <div>
      <div className="radioContainer">
        {/* Direct Bank Transfer Option */}
        <div className="radioButton">
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label htmlFor="option1" className="radioLabel">
            Direct Bank Transfer
          </label>
        </div>
        {selectedValue === "option1" && (
          <div className="cashMessage">
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
        )}

        {/* Credit Card Option */}
        <div className="radioButton">
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
          <label htmlFor="option2" className="radioLabel">
            Credit Card
          </label>
          {/* Card Number Input Field */}
          {selectedValue === "option2" && (
            <div className="cardInput">
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
                className="cardNumberField"
              />
            </div>
          )}
        </div>

        {/* Cash On Delivery Option */}
        <div className="radioButton">
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label htmlFor="option3" className="radioLabel">
            Cash On Delivery
          </label>
        </div>
      </div>

      {/* Conditional Rendering for Cash On Delivery */}
      {selectedValue === "option3" && (
        <div className="cashMessage">
          <p>
            You have selected Cash On Delivery. Please ensure you have the exact
            amount ready.
          </p>
        </div>
      )}
    </div>
  );
}

export default RadioButtons;
