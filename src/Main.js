import React from "react";
import Actor from "./Actor";

class Main extends React.Component {
  state = {
    selected: "",
    actress: [
      { name: "Saoirse Ronan", film: "Lady Bird" },
      { name: "Frances McDormand", film: "Three Billboards Outside Ebbing, Missouri" },
      { name: "Sally Hawkins", film: "The Shape of Water" },
      { name: "Meryl Streep", film: "The Post" },
      { name: "Margot Robbie", film: "I, Tonya" }
    ],
    actor: [
      { name: "Daniel Day-Lewis", film: "Phantom Thread" },
      { name: "Timothee Chalamet", film: "Call Me By Your Name" },
      { name: "Denzel Washington", film: "Roman Israel Esq." },
      { name: "Daniel Kaluuya", film: "Get Out" },
      { name: "Gary Oldman", film: "The Darkest Hour" }
    ],
    supp_actress: [
      { name: "Octavia Spencer", film: "The Shape of Water" },
      { name: "Mary J. Blige", film: "Mudbound" },
      { name: "Allison Janney", film: "I, Tonya" },
      { name: "Laurie Metcalf", film: "Ladybird" },
      { name: "Lesley Manville", film: "Phantom Thread" }
    ],
    supp_actor: [
      { name: "Willem Dafoe", film: "The Florida Project" },
      { name: "Sam Rockwell", film: "Three Billboards Outside Ebbing, Missouri" },
      { name: "Christopher Plummer", film: "All The Money in the World" },
      { name: "Woody Harrelson", film: "Three Billboards Outside Ebbing Missouri" },
      { name: "Richard Jenkins", film: "The Shape of Water" }
    ]
  };

  changeCategory(e) {
    console.log(e.target.name);
    this.setState({
      ...this.state,
      selected: e.target.name
    });
  }
  render() {
    let category = this.state.selected;
    let actors = this.state[category];
    console.log(actors);
    return (
      <div>
        <button name="actor" onClick={this.changeCategory.bind(this)}>
          Actor
        </button>
        <button name="actress" onClick={this.changeCategory.bind(this)}>
          Actress
        </button>
        <button name="supp_actor" onClick={this.changeCategory.bind(this)}>
          Supporting Actor
        </button>
        <button name="supp_actress" onClick={this.changeCategory.bind(this)}>
          Supporting Actress
        </button>
        {actors &&
          actors.map(actor => <Actor name={actor.name} film={actor.film} />)}
      </div>
    );
  }
}

export default Main;
