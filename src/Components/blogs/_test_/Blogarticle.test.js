import renderer from 'react-test-renderer';
import Blogarticle from '../Blogarticle';


it('blogarticle renders correctly', () => {
  const blogarticle = renderer
    .create(<Blogarticle />)
    .toJSON();
  expect(blogarticle).toMatchSnapshot();
});