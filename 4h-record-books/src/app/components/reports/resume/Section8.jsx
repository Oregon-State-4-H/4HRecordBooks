import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import ReportStyles from "../ReportStyles.jsx";
import Footer from "../Footer.jsx";

let col1Flex = 1;
let col2Flex = 5;
let col3Flex = 1;
let col4Flex = 1;

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
          <Text>What I did</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Hours Served</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>People Reached</Text>
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
          <Text>What I did</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>Hours Served</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>People Reached</Text>
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
    rows.splice(i, 0, <TableHeader key={"Sec8Head-" + count} isBreak={true} />);
    i += 25;
    count++;
  }
}


function Section8(props) {
  const tableData = props.tableData;
  rows = tableData.map((row, index) => {
    return (
      <View key={index} style={styles.tableRow}>
        <View style={[styles.col1, ReportStyles.tableColAlignCenter]}>
          <Text>{row.year}</Text>
        </View>
        <View style={[styles.col2, ReportStyles.tableColAlignLeft]}>
          <Text>{row.description}</Text>
        </View>
        <View style={[styles.col3, ReportStyles.tableColAlignCenter]}>
          <Text>{row.hours}</Text>
        </View>
        <View style={[styles.col4, ReportStyles.tableColAlignCenter]}>
          <Text>{row.people}</Text>
        </View>
      </View>
    )
  });

  if (tableData.length > 23)
    addPageBreaks();

  return (
    <Page size="LETTER" style={ReportStyles.body} wrap>
        <Text style={ReportStyles.h1}>Section 8: Other Citizenship/Community Service Participation</Text>
        <Text style={ReportStyles.tableHeaading}>List of all non-4-H related activitied that contributed to the welfare of my club or community</Text>
  
        <TableHeader headerKey={"Sec7Head-0"} isBreak={false} />

        {rows}

      <Footer />
    </Page>
  )
};

export default Section8;