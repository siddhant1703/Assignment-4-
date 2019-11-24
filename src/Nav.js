import React, {Component} from 'react';
import{
	Link
} from 'react-router-dom';
class Nav extends Component {
	constructor(props){
		super(props);
		this.state= {
			error: null,
			isLoaded: false,
			items:[]
			};
	}
	async componentDidMount(){
		try{
			setInterval(async () => {
				console.log("reloading");
				const res = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey='); //I am submitting API Key to the blackboard for security reasons please paste it and run.
				const newsapi= await res.json();
				const articles= newsapi.articles;
				this.setState({
					isLoaded: true,
					items: articles
				})
			}, 5000);
		} catch(e){
			console.log(e);
		}
	}

	render(){
		const { error, isLoaded, items } = this.state;
        if (error) {
          return <nav><div>Error: {error.message}</div></nav>;
        } else if (!isLoaded) {
          return<nav><center> <div> <b> <i> <h2>Navigation tab is loading...</h2> </i> </b> </div></center></nav>;
        } else {
          return (
            <nav>
             <div>
             <Link exact to="/"><center><h3>Home</h3></center></Link>
             </div>
             <div>
             <h2><center>Top Headlines</center></h2>
             </div>
            <ul>
              {items.map((item, key) => (

                <li key={key}>
                  <p>Title: {item.title}</p> <p>Description: {item.description}</p> <p><a href={item.url}>Click to read full story...  </a></p>
                </li>
              ))}
            </ul>
            </nav>
          );
      	}
	}
}
export default Nav;