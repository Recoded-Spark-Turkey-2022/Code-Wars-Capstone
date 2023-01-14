// import renderer from 'react-test-renderer';
// import BookAppointment from './bookAppointment';


// it('BookAppointment renders correctly', () => {
//   const tree = renderer
//     .create(<BookAppointment/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });







import React from "react";
import renderer from "react-test-renderer";
import BookAppointment from './bookAppointment';
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <BookAppointment/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});