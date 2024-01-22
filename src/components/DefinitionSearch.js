import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="flex space-between space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate("/dictionary/" + word);
      }}
    >
      <input
        className="shrink min-x-0 px-2 py-1 rounded"
        placeholder="Dinosaur"
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />

      <button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
        Search
      </button>
    </form>
  );
}
