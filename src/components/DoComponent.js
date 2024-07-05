import React, { useEffect, useState } from 'react';

const DoComponent = () => {
  const [atividades, setAtividades] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Função para salvar os dados em localStorage como JSON
  const salvarDados = () => {
    const dados = JSON.stringify({ atividades });
    localStorage.setItem('atividadesData', dados);
  };

  // Função para carregar os dados do localStorage para o estado do componente
  const carregarDados = () => {
    const dados = localStorage.getItem('atividadesData');
    if (dados) {
      const { atividades } = JSON.parse(dados);
      setAtividades(atividades);
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
    console.log('Atividades Executadas:', atividades);
    salvarDados(); // Salvar os dados ao clicar no botão "Salvar"
    setSubmitted(true); // Define submitted como true após o envio do formulário
  };

  return (
    <div>
      <h2>Fase de Execução (Do)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Atividades Executadas:</label>
          <textarea
            value={atividades}
            onChange={(e) => setAtividades(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>

      {submitted && (
        <div>
          <h3>Atividades Executadas Inseridas:</h3>
          <p>{atividades}</p>
        </div>
      )}
    </div>
  );
};

export default DoComponent;
