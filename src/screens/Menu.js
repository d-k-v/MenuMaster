import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { globalStyle } from "../utils/styles";
import MenuItem from "../components/menu-item";
import { Searchbar } from "react-native-paper";

const Menu = ({ navigation }) => {
  useEffect(() => {
    console.log("inside Menu");
  });
  return (
    <View style={globalStyle.container}>
      <Text>Menu</Text>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        <MenuItem itemName="Shahi Paneer" />
        <MenuItem itemName="Butter Paneer" />
        <MenuItem itemName="Roti Paneer" />
        <MenuItem
          itemName="Gobi Aloo"
          itemDetail="this is very long description of Gobi Aloo ghr nowr gofihf ojm om uu pm j"
        />
        <MenuItem itemName="Shahi Paneer" />
        <MenuItem itemName="Shahi Paneer" />
        <MenuItem itemName="Butter Paneer" />
        <MenuItem itemName="Roti Paneer" />
        <MenuItem itemName="Gobi Aloo" />
        <MenuItem itemName="Shahi Paneer" />
        <MenuItem itemName="Shahi Paneer" />
        <MenuItem itemName="Butter Paneer" />
        <MenuItem itemName="Roti Paneer" />
        <MenuItem itemName="Gobi Aloo" />
        <MenuItem itemName="Shahi Paneer" />
      </ScrollView>
      <Searchbar
        icon={""}
        style={{
          position: "absolute",
          bottom: 10,
          width: "80%",
          maxWidth: 500,
          backgroundColor: "#FCC8D1",
          borderColor: "#D14D72",
          borderWidth: 1,
        }}
        placeholder="Search Item"
        mode="bar"
      />
    </View>
  );
};
export default Menu;
