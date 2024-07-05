import React, { useState } from 'react';
import './App.css';
import ActComponent from './components/ActComponent';
import CheckComponent from './components/CheckComponent';
import DoComponent from './components/DoComponent';
import Fluxograma from './components/Fluxograma';
import ISOSystem from './components/ISOSystem';
import MASP from './components/MASP';
import PlanComponent from './components/PlanComponent';
import SIPOC from './components/SIPOC';

const App = () => {
  // Estado local para armazenar os dados dos componentes
  const [savedData, setSavedData] = useState({
    SIPOC: '',
    plan: '',
    do: '',
    check: '',
    act: ''
  });

  const salvarJSON = () => {
    const jsonEscopo = JSON.stringify(savedData);
    const blob = new Blob([jsonEscopo], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gerenciamento-da-comunicacao.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const carregarJSON = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const content = JSON.parse(e.target.result);
        setSavedData(content);
      } catch (error) {
        console.error('Erro ao carregar arquivo JSON:', error);
        alert('Erro ao carregar arquivo JSON. Verifique o formato do arquivo.');
      }
    };
    fileReader.readAsText(event.target.files[0]);
  };

  return (
    <div className="App">
      <h1>Gestão da Qualidade em Projetos</h1>
      <SIPOC  setSavedData={setSavedData} savedData={savedData.SIPOC}/>
      <ISOSystem />
      <MASP />
      <hr />
      <PlanComponent setSavedData={setSavedData} savedData={savedData.plan} />
      <hr />
      <DoComponent setSavedData={setSavedData} savedData={savedData.do} />
      <hr />
      <CheckComponent setSavedData={setSavedData} savedData={savedData.check} />
      <hr />
      <ActComponent setSavedData={setSavedData} savedData={savedData.act} />
      <Fluxograma />
      <hr />

      {/* Botões para salvar e carregar */}
      <div className="buttons-container">
        <button className="button" onClick={salvarJSON}>Salvar como JSON</button>
        <label htmlFor="uploadJson" className="button-label">
          <input
            id="uploadJson"
            type="file"
            style={{ display: 'none' }}
            onChange={carregarJSON}
          />
          <button className="button" type="button" onClick={() => document.getElementById('uploadJson').click()}>
            Carregar JSON
          </button>
        </label>
      </div>
    </div>
  );
};

export default App;
