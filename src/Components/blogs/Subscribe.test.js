import React from "react";
import renderer from "react-test-renderer";
import SubscribeForm from './Subscribe';
import { MemoryRouter } from "react-router-dom";

it("SubscribeForm renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <SubscribeForm/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});