import Header from '../components/Header';
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className='wrapper'>
      <h1>Can't decide on what to drink?</h1>
      <h5>Click the button below for our interactive cocktail menu!</h5>
      <button  className="button">
      <Link class="nav-link" to="picker">
                  BEGIN
                  <span class="sr-only">(current)</span>
                </Link>
        </button>
    </div>
  );
}

export default Home;