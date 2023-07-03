import React, { useState } from "react";

const Interests = () => {
  const habilidadesDisponibles = {
    Programación: [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Ruby",
      "Swift",
      "PHP",
    ],
    Marketing: [
      "SEO",
      "SEM",
      "Marketing de contenidos",
      "Analítica web",
      "Email marketing",
    ],
    Idiomas: ["Inglés", "Español", "Francés", "Alemán", "Chino", "Japonés"],
    "Habilidades blandas": [
      "Comunicación efectiva",
      "Trabajo en equipo",
      "Liderazgo",
      "Resolución de problemas",
    ],
    Startups: [
      "Emprendimiento",
      "Validación de ideas",
      "Finanzas para startups",
      "Modelos de negocio",
    ],
    "Diseño UX": [
      "Wireframing",
      "Prototipado",
      "Investigación de usuarios",
      "Arquitectura de información",
    ],
    Negocios: [
      "Planificación estratégica",
      "Gestión de proyectos",
      "Análisis de mercado",
      "Ventas",
    ],
  };

  const interesesDisponibles = {
    Programación: [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Ruby",
      "Swift",
      "PHP",
    ],
    Marketing: [
      "SEO",
      "SEM",
      "Marketing de contenidos",
      "Analítica web",
      "Email marketing",
    ],
    Idiomas: ["Inglés", "Español", "Francés", "Alemán", "Chino", "Japonés"],
    "Habilidades blandas": [
      "Comunicación efectiva",
      "Trabajo en equipo",
      "Liderazgo",
      "Resolución de problemas",
    ],
    Startups: [
      "Emprendimiento",
      "Validación de ideas",
      "Finanzas para startups",
      "Modelos de negocio",
    ],
    "Diseño UX": [
      "Wireframing",
      "Prototipado",
      "Investigación de usuarios",
      "Arquitectura de información",
    ],
    Negocios: [
      "Planificación estratégica",
      "Gestión de proyectos",
      "Análisis de mercado",
      "Ventas",
    ],
  };

  const [selectedHabilidades, setSelectedHabilidades] = useState([]);
  const [selectedIntereses, setSelectedIntereses] = useState([]);

  const handleHabilidadesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedHabilidades(selectedOptions);
    // Si un interés seleccionado ya está en las habilidades seleccionadas, lo eliminamos
    setSelectedIntereses((prevSelectedIntereses) =>
      prevSelectedIntereses.filter((interes) => !selectedOptions.includes(interes))
    );
  };

  const handleInteresesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedIntereses(selectedOptions);
    // Si una habilidad seleccionada ya está en los intereses seleccionados, lo eliminamos
    setSelectedHabilidades((prevSelectedHabilidades) =>
      prevSelectedHabilidades.filter((habilidad) => !selectedOptions.includes(habilidad))
    );
  };

  return (
    <div>
      <label>
       
        <select
          multiple
          value={selectedHabilidades}
          onChange={handleHabilidadesChange}
        >
          {Object.entries(habilidadesDisponibles).map(([categoria, habilidades]) => (
            <optgroup key={categoria} label={categoria}>
              {habilidades.map((habilidad) => (
                <option key={habilidad} value={habilidad}>
                  {habilidad}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>

      <label>
       
        <select
          multiple
          value={selectedIntereses}
          onChange={handleInteresesChange}
        >
          {Object.entries(interesesDisponibles).map(([categoria, intereses]) => (
            <optgroup key={categoria} label={categoria}>
              {intereses.map((interes) => (
                <option key={interes} value={interes}>
                  {interes}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Interests;
