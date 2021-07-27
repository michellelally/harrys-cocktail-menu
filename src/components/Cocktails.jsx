import Header from '../components/Header';

function Cocktails(props) {
  return (
    <div className='wrapper'>
      <h3>Cocktails page</h3>
      <h4> {props.message}</h4>
    </div>
  );
}

export default Cocktails;

