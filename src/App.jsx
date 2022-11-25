import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Container from './components/Container';
import Greeting from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <Container>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Intl.DateTimeFormat('fr-FR').format(
            new Date('1992-07-14')
          )}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Intl.DateTimeFormat('fr-FR').format(
            new Date('1988-05-11')
          )}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <div>
          <Greeting lang="de">Ludwig</Greeting>
        </div>
        <div>
          <Greeting lang="fr">François</Greeting>
        </div>
        <div>
          <Greeting lang="es">Pedro</Greeting>
        </div>
        <div>
          <Greeting lang="en">John</Greeting>
        </div>
      </Container>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
