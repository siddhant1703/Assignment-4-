import React, { Component } from "react";


class Blog1 extends Component {
  render() {

    	return (
    		<main>
    	<h1><center> Spiderman </center></h1>
	   <img src={process.env.PUBLIC_URL + '/Spiderman.jpg'} alt= "Spiderman" /> 
	   <p><b> 20th November 2019 </b></p>
	   <p>Peter Benjamin Parker was born to C.I.A. agents Richard and Mary Parker, who were killed when Peter was very young. After the death of his parents, Peter was raised by his Uncle Ben and Aunt May in a modest house in Forest Hills, New York. While still in High School, Peter attended a science exhibition about radiology where he was bitten by a radioactive spider, granting him the proportionate strength and agility of a spider as well as a " Spider-Sense" that warns him of nearby danger. In order to test his new abilities – and earn some cash, Peter participated in a wrestling challenge against Crusher Hogan. He easily won the challenge and also gained the attention of the media. Afterwards while backstage, Peter saw a burglar run past him but did nothing to stop him as it wasn’t his problem. Later that night when Peter arrived home, he was told by a policeman that his Uncle Ben had been murdered by someone who broke into their house. The cop mentioned they had tracked the killer to a warehouse. In his anger Peter put on his wrestling costume and went after the murderer himself. After arriving at the warehouse and easily defeating Uncle Ben’s killer, Peter saw that it was the same burglar he didn’t stop at the arena… thus learning that "with great power comes great responsibility".
	   </p>

    		</main>
    		)
    }
}

export default Blog1;