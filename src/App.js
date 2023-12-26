import { Fragment } from "react";
import { GlobalStyle } from "./global.styles";
import CatalogAnalyzer from "./pages/catalog-analyzer/catalog-analyzer.component";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <CatalogAnalyzer />
    </Fragment>
  );
}

export default App;
