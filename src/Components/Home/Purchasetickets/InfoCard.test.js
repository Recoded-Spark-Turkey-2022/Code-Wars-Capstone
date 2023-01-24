
import React from "react";
import renderer from "react-test-renderer";
import InfoCard from "./InfoCard";
import { MemoryRouter } from "react-router-dom";

it("InfoCard renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <InfoCard/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});