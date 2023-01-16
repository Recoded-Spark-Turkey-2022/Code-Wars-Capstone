
import React from "react";
import renderer from "react-test-renderer";
import Card from "./Navbar";
import { MemoryRouter } from "react-router-dom";

it("renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Card/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});