import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import {
  FirstComponent as FC,
  SecondComponent as SC,
} from './components/MyComponent';
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  // const student = {
  //   firstName: 'James',
  //   lastName: 'Gosling',
  //   email: 'Jgosling123@gmail.com',
  // };F

  const skills = ['Java', 'React.js', 'JavaScript'];

  return (
    <div className="App">
      {/*<Welcome name ="Kemet"/>
      <Welcome name = "James"/>*/}
      {/* <Greeting name="Kemet" />
      <Greeting name="James" />
      <FC />
      <SC />
      <MC /> */}
      {/* <HelloWorld /> */}
      {/* <Student data={skills} /> */}

      {/* <Student
        firstName="James"
        lastName="Gosling"
        email="Jgosling123@gmail.com"
      /> */}

      {/* <Employee /> */}

      {/* <User /> */}
      {/* <EventHandling /> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;
