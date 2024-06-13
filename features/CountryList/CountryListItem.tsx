import { Text, View, StyleSheet, Pressable } from "react-native";
import { FC } from "react";
import CountryFlag from "react-native-country-flag";
import Ionicons from "@expo/vector-icons/Ionicons";

type CountryListItemProps = {
  name: string;
  code: string;
  selected: boolean;
  onPress: () => void;
};
const CountryListItem: FC<CountryListItemProps> = ({
  name,
  code,
  selected,
  onPress,
}) => {
  return (
    <Pressable
      testID={`country-item-${code}`}
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: "center",
      }}
    >
      <View style={{ marginRight: 8 }}>
        <CountryFlag
          isoCode={code.toLowerCase()}
          style={styles.flagIcon}
          size={12}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text>{name}</Text>
        <Text>{code}</Text>
        <Text>{selected ? "selected" : "not selected"}</Text>
      </View>
      {selected ? (
        <View style={{ width: 24 }} testID={`checkmark-icon-${code}`}>
          <Ionicons name="checkmark" size={24} />
        </View>
      ) : null}
    </Pressable>
  );
};

export default CountryListItem;

const styles = StyleSheet.create({
  flagIcon: {
    alignSelf: "center",
    marginRight: 16,
  },
});
