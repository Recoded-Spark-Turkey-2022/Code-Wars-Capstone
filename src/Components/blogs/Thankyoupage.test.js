import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import ThankYouPage from './Thankyoupage';

it("ThankYouPage renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <ThankYouPage/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});