import React from "react";
import { Text, Image, StyleSheet, View } from "@react-pdf/renderer";
import '../../fonts/fonts';

var logo = "/assets/photos/logo_osu4h.png";

var footerText = "OSU Extension Service prohibits discrimination in all its programs, services, activities, and materials. This publication will be made available in an accessible alternative format upon request. Please contact the OSU Extension 4-H Office at 541-737-7428. This document was updated in March 2023.";
var footerMargin = 30;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    fontSize: 9,
    bottom: footerMargin,
    height: 60,
    left: footerMargin,
    right: footerMargin,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  footerImage: {
    height: 50,
    marginLeft: 20,
  },
  footerText: {
    flex: 1,
    textAlign: "left",
    fontFamily: "Kievit",
    fontWeight: "normal",
  },
});

const Footer = () => {
  return (
    <View style={styles.footer} fixed>
        <Text style={styles.footerText}>{footerText}</Text>
        <Image style={styles.footerImage} src={logo} alt="OSU Extension Service Logo"/>
    </View>
  )
};
  
export default Footer;