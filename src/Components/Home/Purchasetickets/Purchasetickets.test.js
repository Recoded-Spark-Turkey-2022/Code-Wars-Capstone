
import React from "react";
import renderer from "react-test-renderer";
import Purchasetickets from "./Purchasetickets";
import { MemoryRouter } from "react-router-dom";

it("Purchasetickets renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Purchasetickets/>
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});