import React, { Component } from "react";


class Blog2 extends Component {
  render() {

    	return (
    		<main>
    		<h1><center>Ironman </center></h1>
	   <img src={process.env.PUBLIC_URL + '/Ironman.jpg' } alt= "Ironman" />
	   <p><b>22nd November 2019</b></p>

	   <p> Anthony Edward "Tony" Stark was born in Long Island, New York, to Howard Anthony Stark and Maria Collins Carbonell Stark. In his youth, Tony Stark was a precociously intelligent young boy. When Tony was 7 he was sent to a boarding school, and during this experience he found people difficult to relate to. This was when he became fascinated by machines. By the age of 15 Tony had enrolled in MIT (The Massachusetts Institute of Technology) in Boston, Massachusetts. He graduated at the top of his class at age 19 with double masters in physics and engineering.

At the age of 21, his parents were tragically killed in a car accident. Afterwards, Tony inherited Stark Industries, an unparalleled mega-conglomerate that mostly manufactured weapons for the United States military. One of his first projects as the new CEO was to purchase the manufacturer who designed his parents' car and have the faulty brake system, which was seemingly the cause of their deaths, redesigned in order to prevent any further incidents, thus saving lives. Unknown to Stark, the true architect of his parents' deaths was a business move by Republic Oil (later renamed Roxxon Oil). Lacking in business skills, Tony promoted secretary Pepper Potts to be his executive assistant and left the majority of his workload on her so that he could avoid what he saw as a burden.

During the war in Afghanistan, Stark was at one of his munitions plants testing new technology for the military when he was injured by his own land mine that lodged shrapnel near his heart. Tony was then captured by a local warlord named Wong-Chu (a lackey of the Mandarin) and forced under threat of death to create a doomsday weapon for him with another captive, the famed Nobel award-winning physicist, Yin Sen. The shrapnel was going to enter his heart and kill him, but he and the physicist created an arc reactor which kept the shrapnel away from his heart. In response, Tony built a suit of armor to help himself escape captivity. In the suit, Stark took on the warlord and his men and avenged Yin Sen's death, thus Iron Man was born.
</p>
    		</main>
    		)
    }
}

export default Blog2;