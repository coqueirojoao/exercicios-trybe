// 1 - 🚀 Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app;
import React from 'react';

const Task = (value) => {
  return (
    <h2>{value}</h2>
  );
}

class App extends React.Component {
  render() {
  const myList = ['Jogar', 'Ver o fluzão jogar', 'Ler livro', 'Assistir anime']
  const createList = myList.map((e) => <li>{ e }</li>)
  return (
    <div>
    { Task('Minha lista de afazeres:') }
    { createList }
    </div>
  )
  }
}

export default App;
