import BootStrapCard from './components/BootStrapCard';

function App() {
  const cardInfo = {
    cardTitle: "Card Title",
    cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
  };

  return (
    <div className='container mt-4 p-2'>
      <BootStrapCard cardTitle={cardInfo.cardTitle} cardText={cardInfo.cardText} />
    </div>
  );
}

export default App;
