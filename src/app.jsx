import React, { useState } from 'react';

import CytoscapeComponent from 'react-cytoscapejs';
import UI from './ui';

import elements1 from './data/elements-1';
import elements2 from './data/elements-2';

function App() {
  const [elements, setElements] = useState(elements1);
  const [currScenario, setCurrScenario] = useState(1);

  const baseLayout = {
    name: 'concentric',
  };
  const [layout, setLayout] = useState(baseLayout);
  console.log(layout);

  const onScenarioClick = (scenario: number) => {
    if (scenario === 1) {
      setElements(elements1);
    } else if (scenario === 2) {
      setElements(elements2);
    }

    setCurrScenario(scenario);
    setLayout({
      ...baseLayout,
      rand: Math.floor(Math.random()*10000000),
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '1000px',
        margin: '0 auto',
      }}
    >
      <CytoscapeComponent
        elements={elements}
        layout={layout}
        style={{
          width: '1000px',
          height: '500px',
          border: 'solid 2px #333',
        }}
      />
      <UI
        currScenario={currScenario}
        numScenarios={2}
        onScenarioClick={onScenarioClick}
      />
    </div>
  );
}

export default App;
