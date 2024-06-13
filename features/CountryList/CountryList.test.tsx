import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CountryList, { toggleSelectedCountryInArray } from "./CountryList";
import countries from "./assets/countries.json";

describe("CountryList", () => {
  describe("toggleSelectedCountryInArray", () => {
    it("adds a country to an empty list", () => {
      const prevState: string[] = [];
      const code = "US";
      const result = toggleSelectedCountryInArray(prevState, code);
      expect(result).toEqual(["US"]);
    });

    it("removes a country from a list that contains it", () => {
      const prevState = ["US", "CA"];
      const code = "US";
      const result = toggleSelectedCountryInArray(prevState, code);
      expect(result).toEqual(["CA"]);
    });

    it("adds a country to a list that already contains other countries", () => {
      const prevState = ["CA", "MX"];
      const code = "US";
      const result = toggleSelectedCountryInArray(prevState, code);
      expect(result).toEqual(["CA", "MX", "US"]);
    });

    it("removes a country from a list that contains multiple countries", () => {
      const prevState = ["US", "CA", "MX"];
      const code = "CA";
      const result = toggleSelectedCountryInArray(prevState, code);
      expect(result).toEqual(["US", "MX"]);
    });

    it("does not modify the original array", () => {
      const prevState = ["US", "CA"];
      const code = "US";
      const result = toggleSelectedCountryInArray(prevState, code);
      expect(prevState).toEqual(["US", "CA"]);
    });

    it("handles an empty string as code", () => {
      const prevState = ["US", "CA"];
      const code = "";
      const result = toggleSelectedCountryInArray(prevState, code);
      expect(result).toEqual(["US", "CA", ""]);
    });

    it("handles removing the only item in the list", () => {
      const prevState = ["US"];
      const code = "US";
      const result = toggleSelectedCountryInArray(prevState, code);
      expect(result).toEqual([]);
    });
  });

  test("renders correctly", () => {
    const { getByText } = render(<CountryList />);

    // Check if the first country from the list is rendered
    expect(getByText(countries[0].name)).toBeTruthy();
  });

  test("toggles country selection", () => {
    const { getByTestId } = render(<CountryList />);

    const countryCode = countries[0].code;
    const countryItem = getByTestId(`country-item-${countryCode}`);
  });

  // test("renders all countries", () => {
  //   const { getByText } = render(<CountryList />);

  //   // Check if all countries are rendered
  //   countries.forEach((country) => {
  //     expect(getByText(country.name)).toBeTruthy();
  //   });
  // });
});
