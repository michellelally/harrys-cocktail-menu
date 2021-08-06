import { BrowserRouter, Link } from "react-router-dom";

// this is the landing page, greets the customer and display 
function Home(props) {
  return (
    <div className='container'>
      <h2 style={{ fontSize: '3vw' }}>Hi. Can't decide on what to drink?</h2>
      <h6 style={{ fontSize: '2vw' }}>Click the button below for our interactive cocktail menu!</h6>
      <button className="button">

          <Link to="/picker">BEGIN</Link>

      </button>
    </div>
  );
}

export default Home;