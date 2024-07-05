import React, { useEffect, useState } from 'react';

const SIPOC = () => {
  const [supplier, setSupplier] = useState('');
  const [input, setInput] = useState('');
  const [process, setProcess] = useState('');
  const [output, setOutput] = useState('');
  const [customer, setCustomer] = useState('');
  const [sipocData, setSipocData] = useState([]);

  // Função para salvar os dados em localStorage como JSON
  const salvarDados = () => {
    const dados = JSON.stringify(sipocData);
    localStorage.setItem('sipocData', dados);
  };

  // Função para carregar os dados do localStorage para o estado do componente
  const carregarDados = () => {
    const dados = localStorage.getItem('sipocData');
    if (dados) {
      setSipocData(JSON.parse(dados));
    }
  };

  // Efeito para carregar os dados ao montar o componente
  useEffect(() => {
    carregarDados();
  }, []);

  const handleAddSIPOC = () => {
    const newSipoc = { supplier, input, process, output, customer };
    setSipocData([...sipocData, newSipoc]);
    setSupplier('');
    setInput('');
    setProcess('');
    setOutput('');
    setCustomer('');
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h3>Adicionar SIPOC</h3>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Fornecedor"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
        />
        <input
          type="text"
          placeholder="Entradas"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Processo"
          value={process}
          onChange={(e) => setProcess(e.target.value)}
        />
        <input
          type="text"
          placeholder="Saídas"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cliente"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <button onClick={handleAddSIPOC}>Adicionar SIPOC</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Fornecedor</th>
            <th>Entradas</th>
            <th>Processo</th>
            <th>Saídas</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          {sipocData.map((row, index) => (
            <tr key={index}>
              <td>{row.supplier}</td>
              <td>{row.input}</td>
              <td>{row.process}</td>
              <td>{row.output}</td>
              <td>{row.customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SIPOC;
