import Layout from "./components/Layout/Layout";
import { SearchProvider } from './context/SearchContext'
import Home from "./pages/Home/Home";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
