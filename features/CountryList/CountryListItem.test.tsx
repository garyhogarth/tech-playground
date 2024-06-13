import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CountryListItem from "./CountryListItem";
import "@testing-library/jest-native/extend-expect";

describe("CountryListItem", () => {
  const mockOnPress = jest.fn();

  it("renders correctly with given props", () => {
    const { getByText } = render(
      <CountryListItem
        name="Canada"
        code="CA"
        selected={false}
        onPress={mockOnPress}
      />
    );

    expect(getByText("Canada")).toBeTruthy();
    expect(getByText("CA")).toBeTruthy();
    expect(getByText("not selected")).toBeTruthy();
  });

  it("displays the correct flag and icon when selected", () => {
    const { getByText, queryByTestId } = render(
      <CountryListItem
        name="Canada"
        code="CA"
        selected={true}
        onPress={mockOnPress}
      />
    );

    expect(getByText("Canada")).toBeTruthy();
    expect(getByText("CA")).toBeTruthy();
    expect(getByText("selected")).toBeTruthy();
    expect(queryByTestId("checkmark-icon-CA")).toBeTruthy();
  });

  it("calls the onPress function when pressed", () => {
    const { getByText } = render(
      <CountryListItem
        name="Canada"
        code="CA"
        selected={false}
        onPress={mockOnPress}
      />
    );

    fireEvent.press(getByText("Canada"));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
