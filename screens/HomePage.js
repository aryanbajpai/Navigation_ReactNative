import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
} from "react-native";

export default function HomePage({ navigation, route }) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.topic}>NAVIGATION</Text>

        <View
          style={[styles.section, { width: windowWidth > 500 ? "60%" : "92%" }]}
        >
          <Text style={styles.sectionText}>
            1. Heart of any mobile application is Navigation.
          </Text>
          <Text style={styles.sectionText}>
            2. Allows users to move across different screens, access features
            and use App effectively.
          </Text>
          <Text style={styles.sectionText}>
            3. Handling navigation through React Navigation Library.
          </Text>
          <Text style={[styles.sectionText, { fontWeight: "bold" }]}>
            Library: npm install @react-navigation/native
          </Text>
          <Text style={[styles.sectionText, { fontWeight: "bold" }]}>
            Dependencies: npx expo install react-native-screens
            react-native-safe-area-context
          </Text>
          <Text style={styles.sectionText}>
            4. Wrap whole app to NavigationContainer
          </Text>
        </View>

        <View
          style={[styles.section, { width: windowWidth > 500 ? "60%" : "92%" }]}
        >
          <Text style={styles.sectionText}>
            NAVIGATORS: Stack, Drawer & Tab.
          </Text>

          <Pressable
            style={styles.nav}
            onPress={() =>
              navigation.navigate("Stack", {
                name: "STACK Navigator",
              })
            }
          >
            <Text
              style={[
                styles.sectionText,
                {
                  fontStyle: "italic",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 21,
                },
              ]}
            >
              Stack Navigator
            </Text>
          </Pressable>

          <Pressable
            style={styles.nav}
            onPress={() =>
              navigation.navigate("Drawer", {
                name: "Dynamic Name",
              })
            }
          >
            <Text
              style={[
                styles.sectionText,
                {
                  fontStyle: "italic",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 21,
                },
              ]}
            >
              Drawer Navigator
            </Text>
          </Pressable>

          <View style={styles.nav}>
            <Text
              style={[
                styles.sectionText,
                {
                  fontStyle: "italic",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 21,
                },
              ]}
            >
              {route.params?.result}
            </Text>
          </View>

          <Pressable
            style={styles.nav}
            onPress={() =>
              navigation.navigate("Tab", {
                name: "TAB Navigator",
              })
            }
          >
            <Text
              style={[
                styles.sectionText,
                {
                  fontStyle: "italic",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 21,
                },
              ]}
            >
              Tab Navigator
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
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
    borderRadius: 10,
    borderWidth: 1,
    elevation: 8,
    padding: 10,
    marginBottom: 16,
  },
  sectionText: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 18,
    color: "#fff",
  },

  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  screenText: {
    fontSize: 24,
  },
  nav: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#3d1f1d",
    borderRadius: 8,
  },
});
