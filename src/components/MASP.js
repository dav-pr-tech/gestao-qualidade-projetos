import React, { useEffect, useState } from 'react';

const MASP = () => {
  const [risk, setRisk] = useState('');
  const [causes, setCauses] = useState('');
  const [solution, setSolution] = useState('');
  const [maspList, setMaspList] = useState([]);

  // Função para salvar os dados em localStorage como JSON
  const salvarDados = () => {
    const dados = JSON.stringify(maspList);
    localStorage.setItem('maspList', dados);
  };

  // Função para carregar os dados do localStorage para o estado do componente
  const carregarDados = () => {
    const dados = localStorage.getItem('maspList');
    if (dados) {
      setMaspList(JSON.parse(dados));
    }
  };

  // Efeito para carregar os dados ao montar o componente
  useEffect(() => {
    carregarDados();
  }, []);

  const handleAddMASP = () => {
    if (risk && causes && solution) {
      const newMasp = { risk, causes, solution };
      setMaspList([...maspList, newMasp]);
      setRisk('');
      setCauses('');
      setSolution('');
      salvarDados(); // Chamada para salvar os dados após adicionar um novo MASP
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h3>Montagem do MASP a partir da Gestão de Riscos</h3>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Risco"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        />
        <input
          type="text"
          placeholder="Causas"
          value={causes}
          onChange={(e) => setCauses(e.target.value)}
        />
        <input
          type="text"
          placeholder="Solução"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        />
        <button onClick={handleAddMASP}>Adicionar MASP</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Risco</th>
            <th>Causas</th>
            <th>Solução</th>
          </tr>
        </thead>
        <tbody>
          {maspList.map((maspItem, index) => (
            <tr key={index}>
              <td>{maspItem.risk}</td>
              <td>{maspItem.causes}</td>
              <td>{maspItem.solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MASP;
