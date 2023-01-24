
import React from "react";
import renderer from "react-test-renderer";
import CommuncicationCard from "./CommuncicationCard";
import { MemoryRouter } from "react-router-dom";

it(" CommuncicationCard renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <CommuncicationCard/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});