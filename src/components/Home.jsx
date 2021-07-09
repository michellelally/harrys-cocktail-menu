import Header from '../components/Header';
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className='wrapper'>
      <Header />
      <h3>Can't decide on what to drink?</h3>
      <h6>Click the button below for our interactive cocktail menu</h6>
      <button>
      <Link class="nav-link" to="picker">
                  Begin
                  <span class="sr-only">(current)</span>
                </Link>
        </button>
    </div>
  );
}

export default Home;