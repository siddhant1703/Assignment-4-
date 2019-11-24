import React, { Component } from "react";
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {

    	return (

    	<main>
	   <ul>
	   <li>
	   <Link exact to= "/Blog1"><h2> Spiderman </h2></Link>
	   <img src={process.env.PUBLIC_URL + '/Spiderman.jpg' } alt= "Spiderman" />
	   <p><b> 17th November 2019 </b></p>

	   <p> In Forest Hills, Queens, New York, Midtown High School student Peter Benjamin Parker is a science-whiz orphan living with his Uncle Ben and Aunt May. As depicted in Amazing Fantasy #15 , he is bitten by a radioactive spider at a science exhibit and «acquires the agility and proportionate strength of an arachnid». Along with heightened athletic abilities, Parker gains the ability to adhere to walls and ceilings. Initially seeking to capitalize on his new abilities, Parker dons a costume and, as «Spider-Man», becomes a novelty television star. However, «He blithely ignores the chance to stop a fleeing thief, his indifference ironically catches up with him when the same criminal later robs and kills his Uncle Ben.» Spider-Man tracks and subdues the killer and learns, in the story's next-to-last caption, «With great power there must also come—great responsibility!»
In time, Peter graduates from high school, and enrolls at Empire State University , where he meets roommate and best friend Harry Osborn, and girlfriend Gwen Stacy, and Aunt May introduces him to Mary Jane Watson. As Peter deals with Harry's drug problems, and Harry's father is revealed to be Spider-Man's nemesis the Green Goblin, Peter even attempts to give up his costumed identity for a while. Gwen Stacy's father, New York City Police detective captain George Stacy is accidentally killed during a battle between Spider-Man and Doctor Octopus . </p>
</li>

	    <li>
	   <Link exact to= "/Blog2"><h2> Ironman </h2></Link>
	   <img src={process.env.PUBLIC_URL + '/Ironman.jpg' } alt= "Ironman" />
	   <p><b>20th November 2019</b></p>

	   <p> Anthony Edward «Tony» Stark was born in Long Island, New York, to Howard Anthony Stark and Maria Collins Carbonell Stark. This was when he became fascinated by machines. By the age of 15 Tony had enrolled in MIT in Boston, Massachusetts. He graduated at the top of his class at age 19 with double masters in physics and engineering.

At the age of 21, his parents were tragically killed in a car accident. Afterwards, Tony inherited Stark Industries, an unparalleled mega-conglomerate that mostly manufactured weapons for the United States military. One of his first projects as the new CEO was to purchase the manufacturer who designed his parents' car and have the faulty brake system, which was seemingly the cause of their deaths, redesigned in order to prevent any further incidents, thus saving lives. Unknown to Stark, the true architect of his parents' deaths was a business move by Republic Oil .

The shrapnel was going to enter his heart and kill him, but he and the physicist created an arc reactor which kept the shrapnel away from his heart. In response, Tony built a suit of armor to help himself escape captivity. In the suit, Stark took on the warlord and his men and avenged Yin Sen's death, thus Iron Man was born.

</p>
</li>

	    <li>
	   <Link exact to= "/Blog3"><h2> Doctorstrange </h2></Link>
	   <img src={process.env.PUBLIC_URL + '/Doctorstrange.jpg' } alt= "Doctorstrange" />
	   <p><b> 22nd November 2019  </b></p>

	   <p> At a young age, Stephen Strange had dreams of becoming a doctor. The eldest child of three, Strange was born in 1930 while his parents Eugene and Beverly Strange were on vacation in Philadelphia. Ironically, it was his inability to later save her from drowning when he was nineteen and on leave from college that undermined his belief in life’s meaning and the value of idealism. Nevertheless, he rapidly finished med school at a young age and became a successful neurosurgeon.

Strange displayed phenomenal talent in his chosen field, and quickly attained wealth and notoriety. The more successful he became, the more arrogant he grew. At a much later stage Stephen attempted to restore his brother through magical means, but instead imbued him with the curse of vampirism. A car accident that damaged the nerves in his hands changed everything for Stephen Strange.

One day he heard a rumor of a mystical personage known as the Ancient One in Tibet. Marshaling the last of his inner and outer resources, Strange diligently searched until the fortress of the Ancient One was revealed to him. Circumstances revealed to Strange that it was none other than Baron Mordo, the Ancient One’s chief disciple, who was the perpetrator of the attack, and who continued to plot the destruction of the antediluvian mystic in an attempt to gain power. To his horror, Strange learned he was unable to reveal this after Mordo easily encircled him.

By this act Strange proved himself to the Ancient One, to whom the entire melodrama had been transparent. Thus Doctor Strange put himself on the path to become the new Sorcerer Supreme of the Earth dimension, yet gained a deadly enemy in Baron Mordo.
 </p>
</li>

	  </ul>

	    </main>
		);

	}
}
export default Main;