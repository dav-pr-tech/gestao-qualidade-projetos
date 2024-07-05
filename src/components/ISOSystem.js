import React, { useEffect, useState } from 'react';

const ISOSystem = () => {
  const [iso, setISO] = useState('');
  const [isoList, setISOList] = useState([]);

  // Função para salvar os dados em localStorage como JSON
  const salvarDados = () => {
    const dados = JSON.stringify(isoList);
    localStorage.setItem('isoList', dados);
  };

  // Função para carregar os dados do localStorage para o estado do componente
  const carregarDados = () => {
    const dados = localStorage.getItem('isoList');
    if (dados) {
      setISOList(JSON.parse(dados));
    }
  };

  // Efeito para carregar os dados ao montar o componente
  useEffect(() => {
    carregarDados();
  }, []);

  const handleAddISO = () => {
    if (iso) {
      setISOList([...isoList, iso]);
      setISO('');
      salvarDados(); // Chamada para salvar os dados após adicionar um novo sistema ISO
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h3>Indicar Sistema ISO</h3>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Sistema ISO"
          value={iso}
          onChange={(e) => setISO(e.target.value)}
        />
        <button onClick={handleAddISO}>Adicionar Sistema ISO</button>
      </div>
      <ul>
        {isoList.map((isoItem, index) => (
          <li key={index}>{isoItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default ISOSystem;
