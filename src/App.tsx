import React from 'react';
import { DeploymentProvider } from './libs/deploymentsProvider';
import { Home } from './modules/Home';

function App() {
  return (
    <DeploymentProvider>
          <Home />
    </DeploymentProvider>
  );
}

export default App;
