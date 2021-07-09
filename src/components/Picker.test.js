import { shallow, mount, render } from 'enzyme'; 
import Picker from './Picker'

describe('<Picker />', () => {
  it('render a picker area', () => {
    const picker = shallow(<Picker />);
    expect(picker.find('button').length).toEqual(1);
  });
});

