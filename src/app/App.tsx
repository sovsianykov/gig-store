import React from "react";
import { PlayListProvider } from "./Context";
import AppRouter from "./AppRouter";

function App() {
  return (
    <PlayListProvider>
      <AppRouter />
    </PlayListProvider>
  );
}
export default App;
