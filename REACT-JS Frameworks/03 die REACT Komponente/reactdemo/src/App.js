
import './App.css';
import SuperButoon from './componets/SuperButoon';
import ButtonRow from './componets/ButtonRow';
import List from './componets/List';
import Button2 from './componets/Button2';
import Card from './componets/card';
import Vote from './componets/Vote';



function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <SuperButoon/>
      <ButtonRow/>

      <h2>05 Aufgabe Komponente</h2>
      <List/>
      <Button2/>
      <Card/>
      <h3>06 Aufgabe Properties</h3>
      <div class="container">
      <Vote candidate="John" address="Dornbirn"/>
      <Vote candidate="Ben" address="your mom"/>
      <Vote candidate="Richie" address="your dad"/>
      </div>
    </div>
  );
}

export default App;
