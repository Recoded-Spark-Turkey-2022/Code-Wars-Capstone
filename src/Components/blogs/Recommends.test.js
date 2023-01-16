
import React from "react";
import renderer from "react-test-renderer";
import Recommends from './Recommends';
import { MemoryRouter } from "react-router-dom";

it("Recommends renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Recommends />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});