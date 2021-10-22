
import './App.css';
import CardLayout from './components/CardLayout';

function App() {

  const testingData = [
    {
      name: 'Pizza',
      rating: '4',
      address: 'Someplace Somewhere',
      phone: '1234567890',
      description: 'yada yada'
    },
    {
      name: 'Burger',
      rating: '3',
      address: 'Someplace Somewhere',
      phone: '1234567890',
      description: 'burg'
    },
    {
      name: 'Pasta',
      rating: '4.5',
      address: 'Someplace Somewhere',
      phone: '1234567890',
      description: 'spagetti'
    },
    {
      name: 'sandwich',
      rating: '3.5',
      address: 'Someplace Somewhere',
      phone: '1234567890',
      description: 'PB&J'
    }
  ]

  return (
    <div className="container-fluid">
      <CardLayout restaurant={testingData} />
    </div>
  );
}

export default App;
