import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token2_backend } from "../../../declarations/token2_backend";

function Balance() {
  
  const [inputValue, setInput] = useState("");
  const [balanceResult, setBalance] = useState("");

  async function handleClick() {
    
    const principal = Principal.fromText(inputValue);
    const balance = await token2_backend.balanceOf(principal);
    setBalance(balance.toLocaleString());

  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => {setInput(e.target.value)}}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p>This account has a balance of {balanceResult}.</p>
    </div>
  );
}

export default Balance;
