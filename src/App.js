import './App.css';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import TopHeader from './components/TopHeader';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
