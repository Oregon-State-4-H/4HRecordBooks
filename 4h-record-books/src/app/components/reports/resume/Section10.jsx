import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles.jsx";
import Footer from "../Footer.jsx";

let col1Flex = 1;
let col2Flex = 3;
let col3Flex = 3;
let col4Flex = 1;
let col5Flex = 2;
let col6Flex = 1.5;

const styles = StyleSheet.create({
  headerRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "black",
    borderBottom: 2,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    fontSize: 11,
  },
  tableRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    fontWeight: "normal",
    borderColor: "black",
    borderBottom: 1,
    borderLeft: 1,
    borderRight: 1,
    height: 25,
    alignContent: "center",
    fontSize: 10,
  },
  col1: {
    flex: col1Flex,
    borderRight: 1,
  },
  col2: {
    flex: col2Flex,
    borderRight: 1,
  },
  col3: {
    flex: col3Flex,
    borderRight: 1,
  },
  col4: {
    flex: col4Flex,
    borderRight: 1,
  },
  col5: {
    flex: col5Flex,
    borderRight: 1,
  },
  col6: {
    flex: col6Flex,
  },
});

function TableHeader(props) {
  const headerKey = props.headerKey;
  const isBreak = props.isBreak;

  if(isBreak === false){
    return (
      <View key={headerKey} style={styles.headerRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>Year</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignCenter]}>
          <Text>Communication Type</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Topic</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>Times Given</Text>
        </View>
        <View style={[styles.col5, ReportStyles.tableColAlignCenter]}>
          <Text>Location</Text>
        </View>
        <View style={[styles.col6, ReportStyles.tableColAlignCenter]}>
          <Text>Audience Size</Text>
        </View>
      </View>
    )
  } else {
    return (
      <View key={headerKey} style={styles.headerRow} break>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>Year</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignCenter]}>
          <Text>Communication Type</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Topic</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>Times Given</Text>
        </View>
        <View style={[styles.col5, ReportStyles.tableColAlignCenter]}>
          <Text>Location</Text>
        </View>
        <View style={[styles.col6, ReportStyles.tableColAlignCenter]}>
          <Text>Audience Size</Text>
        </View>
      </View>
    )
  }
}

var rows = [];

function addPageBreaks() {
  var i = 21;
  var count = 1

  while (i < rows.length) {
    rows.splice(i, 0, <TableHeader key={"Sec10Head-" + count} isBreak={true} />);
    i += 25;
    count++;
  }
}


function Section10(props) {
  const tableData = props.tableData;
  rows = tableData.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>{row.year}</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignLeft]}>
          <Text>{row.type}</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignLeft]}>
          <Text>{row.topic}</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>{row.timesGiven}</Text>
        </View>
        <View style={[styles.col5, ReportStyles.tableColAlignLeft]}>
          <Text>{row.location}</Text>
        </View>
        <View style={[styles.col6, ReportStyles.tableColAlignCenter]}>
          <Text>{row.size}</Text>
        </View>
      </View>
    )
  });

  if (tableData.length > 23)
    addPageBreaks();

  return (
    <Page size="LETTER" style={ReportStyles.body} wrap>
        <Text style={ReportStyles.h1}>Section 10: Communications in Other Organizations</Text>
        <Text style={ReportStyles.tableHeaading}>Communication not related to 4-H</Text>
  
        <TableHeader headerKey={"Sec10Head-0"} isBreak={false} />

        {rows}

      <Footer />
    </Page>
  )
};

export default Section10;