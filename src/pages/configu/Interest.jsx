import React, { useState } from 'react';

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedInterests(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar los intereses seleccionados
    // ...

    setSelectedInterests([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Intereses y aprendizaje:</label>
        <select
          multiple
          className="form-control"
          value={selectedInterests}
          onChange={handleInterestsChange}
        >
          <option value="interes1">Interés 1</option>
          <option value="interes2">Interés 2</option>
          <option value="interes3">Interés 3</option>
          <option value="interes4">Interés 4</option>
          <option value="interes5">Interés 5</option>
          <option value="interes6">Interés 6</option>
          <option value="interes7">Interés 7</option>
          <option value="interes8">Interés 8</option>
          <option value="interes9">Interés 9</option>
          <option value="interes10">Interés 10</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar intereses y aprendizaje
      </button>
    </form>
  );
};

export default Interests;
