import { useState, useCallback } from "react";
import { StyleSheet, FlatList } from "react-native";
import CountryListItem from "./CountryListItem";

// Import countries from file
// TODO import from API etc
import countries from "./assets/countries.json";

type CountryItem = {
  name: string;
  code: string;
};

export const toggleSelectedCountryInArray = (
  prevState: string[],
  code: string
) => {
  const newState = [...prevState];
  const matchingIndex = newState.indexOf(code);
  if (matchingIndex > -1) {
    newState.splice(matchingIndex, 1);
  } else {
    newState.push(code);
  }
  return newState;
};

const CountryList = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const toggleSelectedCountry = useCallback((code: string) => {
    setSelectedCountries((prevState) =>
      toggleSelectedCountryInArray(prevState, code)
    );
  }, []);

  return (
    <FlatList
      data={countries}
      renderItem={({ item }: { item: CountryItem }) => (
        <CountryListItem
          name={item.name}
          code={item.code}
          selected={selectedCountries.includes(item.code)}
          onPress={() => toggleSelectedCountry(item.code)}
        />
      )}
      keyExtractor={(item) => item.code}
      extraData={selectedCountries}
    />
  );
};

export default CountryList;

const styles = StyleSheet.create({});
