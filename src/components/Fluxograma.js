import React, { useCallback, useState } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    Controls,
    MiniMap,
    useEdgesState,
    useNodesState,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Início' } },
 // { id: '2', position: { x: 0, y: 100 }, data: { label: 'Receber o pedido' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const Fluxograma = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [label, setLabel] = useState('');
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleAddNode = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const handleAddEdge = () => {
    const newEdge = {
      id: `e${source}-${target}`,
      source,
      target,
    };
    setEdges((eds) => eds.concat(newEdge));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
    <h1>Fluxograma</h1>
        <h3>Adicionar Nó</h3>
        <input
          type="text"
          placeholder="Label do Nó"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <button onClick={handleAddNode}>Adicionar Nó</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Adicionar Aresta</h3>
        <input
          type="text"
          placeholder="ID de Origem"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID de Destino"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button onClick={handleAddEdge}>Adicionar Aresta</button>
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
    </div>
    </div>
);
};

export default Fluxograma;

