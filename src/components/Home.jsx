import Header from '../components/Header';
import { Link, withRouter } from "react-router-dom";


function Home(props) {
  return (
    <div className='wrapper'>
      <Header />
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