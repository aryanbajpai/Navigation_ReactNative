import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

export default function TabNav({ route }) {
  const windowWidth = useWindowDimensions().width;

  const { name } = route.params;

  return (
    <ScrollView>
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
            <Text style={[styles.sectionText, { fontWeight: "bold" }]}>
              Tab Navigator:
            </Text>
            <Text style={[styles.sectionText, { fontStyle: "italic" }]}>
              way to switch between different screens by tapping on a TAB,
              displayed at bottom of screen.
            </Text>
            <Text style={[styles.sectionText, { fontStyle: "italic" }]}>
              Install Bottom Tabs Navigator Library
              <Text style={{ fontWeight: "bold" }}>
                npm install @react-navigation/bottom-tabs
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
