import React from "react";
import {render, fireEvent, queryAllByTitle } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
    render(<BoxList/>);
});

it("matches snapshot", () => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("Should add new item", () => {
    const { queryByText, getByLabelText} = render(<BoxList/>);
    const widthInput = getByLabelText("width");
    const heightInput = getByLabelText("height");
    const colorInput = getByLabelText("color");
    const btn = queryByText("Add Box");
    fireEvent.change(widthInput, {target: { value: '100'}})
    fireEvent.change(heightInput, {target: { value: '100'}})
    fireEvent.change(colorInput, {target: { value: 'blue'}})
    fireEvent.click(btn);
    
    //what would I do here to test a new Box has been created?
    //Is this sufficient?
    expect(document.querySelectorAll('div.Box')[1]).toBeInTheDocument();

});