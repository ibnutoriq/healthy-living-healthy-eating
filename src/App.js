import React, { useState } from 'react';
import Select from 'react-select';

export default function App() {
  const [isClearable, setIsClearable] = useState(true);

  function toggleClearable() {
    setIsClearable(!isClearable);
  }

  return (
    <>
      <Select isClearable isSearchable name="color" options={[]} />
    </>
  );
}
