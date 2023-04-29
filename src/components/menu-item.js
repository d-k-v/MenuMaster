import { Image, StyleSheet, Text, View } from "react-native";

const MenuItem = (props) => {
  return (
    <View style={itemStyle.itemCard}>
      <View style={{ justifyContent: "center" }}>
        <Image
          style={itemStyle.itemImg}
          source={require("../../assets/logo.png")}
        />
      </View>
      <View style={{ marginLeft: 13, width: "50%" }}>
        <Text style={itemStyle.itemName}>{props.itemName || "Item one"}</Text>
        <Text style={itemStyle.itemDetail} numberOfLines={3}>
          {props.itemDetail || "This is breif description of item number one,"}
        </Text>
      </View>
      <View style={{}}>
        <Text>plus</Text>
      </View>
    </View>
  );
};
export default MenuItem;

const itemStyle = StyleSheet.create({
  itemImg: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    // marginLeft: 13,
    // backgroundColor: "red",
  },
  itemName: {
    color: "#D14D72",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDetail: {
    // backgroundColor: "red",
    color: "#8e2542",
    width: "100%",
    flex: 1,
    fontWeight: "500",
    flexWrap: "wrap",
    flexShrink: 1,
  },
  itemCard: {
    width: "80%",
    maxWidth: 500,
    aspectRatio: 59 / 19,
    backgroundColor: "#FCC8D1",
    borderRadius: 30,
    margin: 10,
    flexDirection: "row",
    padding: 13,
  },
});
