import React, { useEffect, useState } from 'react';

const CheckComponent = () => {
  const [resultados, setResultados] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Função para salvar os dados em localStorage como JSON
  const salvarDados = () => {
    const dados = JSON.stringify({ resultados });
    localStorage.setItem('checkData', dados);
  };

  // Função para carregar os dados do localStorage para o estado do componente
  const carregarDados = () => {
    const dados = localStorage.getItem('checkData');
    if (dados) {
      const { resultados } = JSON.parse(dados);
      setResultados(resultados);
      setSubmitted(true); // Define submitted como true ao carregar os dados
    }
  };

  // Efeito para carregar os dados ao montar o componente
  useEffect(() => {
    carregarDados();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Processar os dados aqui, como enviar para um serviço ou armazenar no estado global
    console.log('Resultados da Verificação:', resultados);
    salvarDados(); // Salvar os dados ao clicar no botão "Salvar"
    setSubmitted(true); // Define submitted como true após o envio do formulário
  };

  return (
    <div>
      <h2>Fase de Verificação (Check)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Resultados da Verificação:</label>
          <textarea
            value={resultados}
            onChange={(e) => setResultados(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>

      {submitted && (
        <div>
          <h3>Resultados da Verificação Inseridos:</h3>
          <p>{resultados}</p>
        </div>
      )}
    </div>
  );
};

export default CheckComponent;
