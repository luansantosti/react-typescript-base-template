import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    font-size: ${theme.fontSize.base};
  `}
`;

const App: React.FC = function () {
  return (
    <Button>
      hey theme
    </Button>
  );
};

export default App;
