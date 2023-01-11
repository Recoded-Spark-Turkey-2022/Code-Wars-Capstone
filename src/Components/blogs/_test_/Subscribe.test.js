
import renderer from 'react-test-renderer';
import Subscribeform from "./Subscribe";

it('Subscribeform renders correctly', () => {
  const subscribeform = renderer
    .create(<Subscribeform/>)
    .toJSON();
  expect(subscribeform).toMatchSnapshot();
});