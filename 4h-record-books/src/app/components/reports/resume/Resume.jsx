import { useState, useEffect } from "react";
import { Document, Font, PDFViewer, Page, View, Text } from "@react-pdf/renderer";
import Section0 from "./Section0.jsx";
import Footer from "../Footer.jsx";
// import Section1 from "./Section1.jsx";
// import Section2 from "./Section2.jsx";

// OSU Fonts
var Stratum2Light = "/assets/fonts/Stratum2-Light.otf";
var Stratum2Medium = "/assets/fonts/Stratum2-Medium.otf";
var Stratum2Regular = "/assets/fonts/Stratum2-Regular.otf";

var Kievit = "/assets/fonts/KievitOffc.ttf";
var KievitBold = "/assets/fonts/KievitOffc-Bold.ttf";
var KievitBoldItalic = "/assets/fonts/KievitOffc-BoldIta.ttf";
var KievitItalic = "/assets/fonts/KievitOffc-Ita.ttf";
var KievitMedium = "/assets/fonts/KievitOffc-Medi.ttf";
var KievitMediumItalic = "/assets/fonts/KievitOffc-MediIta.ttf";


Font.register({ family: 'Stratum2', fonts: [
  { src: Stratum2Light, fontWeight: 'light' },
  { src: Stratum2Medium, fontWeight: 'medium' },
  { src: Stratum2Regular, fontWeight: 'normal' }
]});

Font.register({ family: 'Kievit', fonts: [
  { src: Kievit, fontWeight: 'normal' },
  { src: KievitBold, fontWeight: 'bold' },
  { src: KievitBoldItalic, fontWeight: 'bold', fontStyle: 'italic' },
  { src: KievitItalic, fontWeight: 'normal', fontStyle: 'italic' },
  { src: KievitMedium, fontWeight: 'medium' },
  { src: KievitMediumItalic, fontWeight: 'medium', fontStyle: 'italic' },
]});

const PDFFile = () => {
  return (
    <Document>
        <Section0 />
      {/* <Section1 />
      <Section2 /> */}
    </Document>
  )
};

const PDFView = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <PDFViewer style={{width: '100%', height: '100vh', paddingTop:'0px'}}>
      <PDFFile />
    </PDFViewer>
  )
}


export default PDFView;
