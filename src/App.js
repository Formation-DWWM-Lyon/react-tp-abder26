import React from 'react';
import { Container } from 'react-bootstrap';
import DataContainer from './containers/DataContainer';
import NameList from './components/NameList';

function App() {
  return (
    <Container>
      Votre code ici!
      <DataContainer />
      <NameList />
    </Container>
  );
}

export default App;
