import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function TabNav({route}) {
    const windowWidth = useWindowDimensions().width;

    const {name} = route.params;
  
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
          <Text style={[styles.sectionText, { fontStyle: "italic" }]}>
            <Text style={{ fontWeight: "bold" }}>Tab Navigator:</Text> at the
            BOTTOM of screen, easily switch between different routes.
          </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#df643f',
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
      color: '#fff',
    },
});