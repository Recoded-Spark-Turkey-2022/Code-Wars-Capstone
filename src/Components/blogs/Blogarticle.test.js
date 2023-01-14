
import React from "react";
import renderer from "react-test-renderer";
import Blogarticle from './Blogarticle';
import { MemoryRouter } from "react-router-dom";

it("Blogarticle renders correctly", () => {
    const test = renderer
        .create(
            <MemoryRouter>
                <Blogarticle />
            </MemoryRouter>
        )
        .toJSON();
    expect(test).toMatchSnapshot();
});