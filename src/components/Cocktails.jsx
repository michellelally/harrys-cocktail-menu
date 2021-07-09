import Header from '../components/Header';
import { Link } from "react-router-dom";
import { Cocktails } from '.';


function Home(props) {
  return (
    <div className='wrapper'>
      <Header />
      <h3>Cocktails page</h3>
    </div>
  );
}

export default Cocktails;