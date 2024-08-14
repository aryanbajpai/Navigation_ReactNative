import { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
} from "react-native";

export default function DrawerNav({ route, navigation }) {
  const windowWidth = useWindowDimensions().width;

  const { name } = route.params;

  //Another way to Pass Dynamic data through NAVIGATION
  //useEffect can also br used but its not Smooth enough
  useLayoutEffect(() => {
    //Used when Navigation options depends on components State or Props
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{name}</Text>

      <View
        style={[styles.section, { width: windowWidth > 500 ? "50%" : "92%" }]}
      >
        <Text style={styles.sectionText}>
          - NAVIGATORS: Stack, Drawer & Tab.
        </Text>

        <View
          style={{
            marginHorizontal: 15,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <Text
            style={[
              styles.sectionText,
              { fontWeight: "bold", fontStyle: "italic" },
            ]}
          >
            Drawer Navigator:
          </Text>
          <Text style={[styles.sectionText, { fontStyle: "italic" }]}>
            renders hidden menu, sliding from either side of screen.
          </Text>
          <Text style={[styles.sectionText, { fontStyle: "italic" }]}>
            neat and organized navigation structure.
          </Text>
          <Text
            style={[
              styles.sectionText,
              { fontWeight: "bold", fontStyle: "italic" },
            ]}
          >
            npm install @react-navigation/drawer
          </Text>
          <Text
            style={[
              styles.sectionText,
              { fontWeight: "bold", fontStyle: "italic" },
            ]}
          >
            Library: npx expo install react-native-gesture-handler
            react-native-reanimated
          </Text>
          <Text
            style={[
              styles.sectionText,
              { fontWeight: "bold", fontStyle: "italic" },
            ]}
          >
            Addition in <Text>babel.config.js</Text>:
          </Text>
          <Text
            style={[
              styles.sectionText,
              { fontWeight: "bold", fontStyle: "italic" },
            ]}
          >
            plugins: [ 'react-native-reanimated/plugin', ]
          </Text>

          <Text
            style={[
              styles.sectionText,
              { fontWeight: "bold", fontStyle: "italic" },
            ]}
          >
            Add - "start": "expo start -c" to the "script" in package.json
          </Text>
          <Text style={[styles.sectionText, { fontStyle: "italic" }]}>
            We can toggle Drawere programatically.
          </Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Button
            title="Update Title"
            onPress={() =>
              navigation.setParams({
                name: "DRAWER Navigator",
              })
            }
          />
        </View>

        <Button
          title="Send Data to Home"
          onPress={() =>
            navigation.navigate("Home", { result: "Data Send from Drawer" })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#df643f",
  },
  topic: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  section: {
    backgroundColor: "#a73728",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 8,
    padding: 10, // Added padding to make sure text isn't too close to the border
  },
  sectionText: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 18,
    color: "#fff",
  },
});
