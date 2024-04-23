import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBoxComponent from "./components/search-box/search-box.component";
import { useState, useEffect } from "react";
const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filtrdMonsters, setFiltersMonsters] = useState(monsters);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFiltrdMonsters = monsters.filter((e) => {
      return e.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    setFiltersMonsters(newFiltrdMonsters);
  }, [monsters, searchField]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((u) => setMonsters(u))
    );
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBoxComponent
        onChangeHandler={onSearchChange}
        className={"monster-search-box"}
        placeholder={"Search monster"}
      />
      <CardList monster={filtrdMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//       response.json().then((u) =>
//         this.setState(() => {
//           return {
//             monster: u,
//           };
//         })
//       )
//     );
//   }

//   onSearch = (event) => {
//     this.setState(() => {
//       return {
//         searchField: event.target.value,
//       };
//     });
//   };
//   render() {
//     const { monster, searchField } = this.state;
//     const { onSearch } = this;
//     const filtrdMonsters = monster.filter((e) => {
//       return e.name
//         .toLocaleLowerCase()
//         .includes(searchField.toLocaleLowerCase());
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters</h1>
//         <SearchBoxComponent
//           onChangeHandler={onSearch}
//           className={"monster-search-box"}
//           placeholder={"Search monster"}
//         />
//         <CardList monster={filtrdMonsters} />
//       </div>
//     );
//   }
// }

export default App;
