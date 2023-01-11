import renderer from 'react-test-renderer';
import BookAppointment from './bookAppointment';


it('BookAppointment renders correctly', () => {
  const tree = renderer
    .create(<BookAppointment/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});