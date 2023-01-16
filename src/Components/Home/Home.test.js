
import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});