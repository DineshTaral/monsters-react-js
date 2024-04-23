import { Component } from "react";
import "./card-list.styles.css";
import CardComponent from "./card/card-component";

const CardList = ({ monster }) => (
  <div className="card-list">
    {monster.map((e) => {
      return <CardComponent monster={e} />;
    })}
  </div>
);
// class CardList extends Component {
//   render() {
//     console.log("render from card list");
//     const { monster } = this.props;
//     return (
//       <div className="card-list">
//         {monster.map((e) => {
//           return <CardComponent monster={e} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
