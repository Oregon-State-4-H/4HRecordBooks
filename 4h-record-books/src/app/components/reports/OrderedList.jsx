import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  itemNumber: {
    marginRight: 10,
  },
  item: {
    flex: 1,
  },
  spaceAfter: {
    marginBottom: 10,
  }
});


const OrderedList = ({items, spaceAfter = false}) => {
  if (spaceAfter) {
    return (
      <View>
        {items.map((item, index) => (
          <View style={[styles.row, styles.spaceAfter]}>
            <Text style={styles.itemNumber}>{index + 1}.</Text>
            <View style={styles.item}>{item}</View>
          </View>
        ))}
      </View>
    )
  } else {
    return (
      <View>
        {items.map((item, index) => (
          <View style={styles.row}>
            <Text style={styles.itemNumber}>{index + 1}</Text>
            <View style={styles.item}>{item}</View>
          </View>
        ))}
      </View>
    )
  }
};
  
export default OrderedList;