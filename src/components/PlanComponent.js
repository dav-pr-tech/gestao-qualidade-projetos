import React, { useState } from 'react';

const PlanComponent = () => {
  const [objetivos, setObjetivos] = useState('');
  const [escopo, setEscopo] = useState('');
  const [kpi, setKpi] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode processar os dados, como enviá-los para um serviço ou armazená-los no estado global (Redux, Context, etc.)
    console.log('Objetivos:', objetivos);
    console.log('Escopo:', escopo);
    console.log('KPI:', kpi);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Fase de Planejamento (Plan)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Objetivos:</label>
          <input
            type="text"
            value={objetivos}
            onChange={(e) => setObjetivos(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Escopo:</label>
          <input
            type="text"
            value={escopo}
            onChange={(e) => setEscopo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>KPI (Indicadores Chave de Desempenho):</label>
          <input
            type="text"
            value={kpi}
            onChange={(e) => setKpi(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>

      {submitted && (
        <div>
          <h3>Valores Inseridos:</h3>
          <p><strong>Objetivos:</strong> {objetivos}</p>
          <p><strong>Escopo:</strong> {escopo}</p>
          <p><strong>KPI:</strong> {kpi}</p>
        </div>
      )}
    </div>
  );
};

export default PlanComponent;
