import React from "react";
import Card, { CardVariant } from "./components/card";

const App = () => {
  return (
    <div>
      <Card variant={CardVariant.primary} width="200px" height="200px">
        <button>кнопка</button>
      </Card>
    </div>
  );
};

export default App;
