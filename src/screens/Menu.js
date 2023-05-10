import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { globalStyle } from "../utils/styles";
import MenuItem from "../components/menu-item";
import { FAB, Searchbar } from "react-native-paper";

const Menu = ({ navigation }) => {
  const [selectedList, setSelectedList] = useState([]);
  useEffect(() => {
    console.log("inside Menu");
    // console.log("Selected list", selectedList);
  });
  return (
    <View style={globalStyle.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          backgroundColor: "rgba(190,190,190,0.1)",
          width: "100%",
          justifyContent: "center",
          paddingTop: 60,
          paddingLeft: 30,
          paddingBottom: 10,
        }}
      >
        Menu
      </Text>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        {menuList.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            itemName={item.itemName}
            itemDetail={item.itemDetail}
            onSelect={(selectedId) => {
              // console.log("selectedId", selectedId);
              const selectedItem = menuList.find(
                (item) => item.id == selectedId
              );
              setSelectedList((result) => [...result, selectedItem]);
            }}
          />
        ))}
      </ScrollView>
      <FAB
        style={{
          position: "absolute",
          margin: 20,
          right: 0,
          bottom: 60,
          borderRadius: 50,
          backgroundColor: "#FCC8D1",
        }}
        small
        icon="arrow-right"
        onPress={() => Alert.alert(JSON.stringify(selectedList))}
      />
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

const menuList = [
  { id: 1, itemName: "Shahi Paneer" },
  { id: 2, itemName: "Butter Paneer" },
  { id: 3, itemName: "Roti Paneer" },

  {
    id: 4,
    itemName: "Gobi Aloo",
    itemDetail:
      "this is very long description of Gobi Aloo ghr nowr gofihf ojm om uu pm j",
  },

  { id: 5, itemName: "Shahi Paneer" },
  { id: 6, itemName: "Shahi Paneer" },
  { id: 7, itemName: "Butter Paneer" },
  { id: 8, itemName: "Roti Paneer" },
  { id: 9, itemName: "Gobi Aloo" },
  { id: 10, itemName: "Shahi Paneer" },
  { id: 11, itemName: "Shahi Paneer" },
  { id: 12, itemName: "Butter Paneer" },
  { id: 13, itemName: "Roti Paneer" },
  { id: 14, itemName: "Gobi Aloo" },
  { id: 15, itemName: "Shahi Paneer" },
];
