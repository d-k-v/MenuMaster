import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setValue(key, value) {
  try {
    await AsyncStorage.setItem(key, value, () => {
      console.log("value stored in localStorage");
    });
  } catch (error) {
    console.log("error while storing data", error);
  }
}
export async function getValue(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.log("error while fetching data ", error);
  }
}
