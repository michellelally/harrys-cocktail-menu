import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className='container'>
      <h2>Can't decide on what to drink?</h2>
      <h6>Click the button below for our interactive cocktail menu!</h6>
      <button  className="button">
      <Link className="nav-link" to="picker">
                  BEGIN
                  <span className="sr-only">(current)</span>
                </Link>
        </button>
    </div>
  );
}

export default Home;