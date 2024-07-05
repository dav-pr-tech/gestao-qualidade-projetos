import React, { useEffect, useState } from 'react';

const ActComponent = () => {
  const [acoes, setAcoes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Função para salvar os dados em localStorage como JSON
  const salvarDados = () => {
    const dados = JSON.stringify({ acoes });
    localStorage.setItem('acoesData', dados);
  };

  // Função para carregar os dados do localStorage para o estado do componente
  const carregarDados = () => {
    const dados = localStorage.getItem('acoesData');
    if (dados) {
      const { acoes } = JSON.parse(dados);
      setAcoes(acoes);
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
    console.log('Ações de Melhoria Contínua:', acoes);
    salvarDados(); // Salvar os dados ao clicar no botão "Salvar"
    setSubmitted(true); // Define submitted como true após o envio do formulário
  };

  return (
    <div>
      <h2>Fase de Ação (Act)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ações de Melhoria Contínua:</label>
          <textarea
            value={acoes}
            onChange={(e) => setAcoes(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>

      {submitted && (
        <div>
          <h3>Ações de Melhoria Contínua Inseridas:</h3>
          <p>{acoes}</p>
        </div>
      )}
    </div>
  );
};

export default ActComponent;
