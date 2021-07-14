import React from 'react';

interface UIProps {
  currScenario: number;
  numScenarios: number;
  onScenarioClick: any;
}

const UI: React.FC<UIProps> = (props) => {
  const {
    currScenario,
    numScenarios,
    onScenarioClick,
  } = props;

  const scenarios = Array(numScenarios).fill(0);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '16px',
      }}
    >
      { scenarios.map((_, i) => {
        const scenarioNumber = (i+1);
        const isSelected = (scenarioNumber === currScenario);

        const unselectedStyle = {};
        const selectedStyle = {
          border: 'solid 3px red',
        };

        return (
          <button
            onClick={(e) => onScenarioClick(scenarioNumber)}
            style={isSelected ? selectedStyle : unselectedStyle}
          >
            <>Scenario {scenarioNumber}</>
          </button>
        );
      }) }
    </div>
  );
};

export default UI;
