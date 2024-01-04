import { useState, useEffect } from "react";
import { Document, PDFViewer, Page, Text } from "@react-pdf/renderer";
import Footer from "../Footer.jsx";
import ReportStyles from "../ReportStyles.jsx";
import Section0 from "./Section0.jsx";
import Section1 from "./Section1.jsx";


const PDFFile = () => {
  return (
    <Document>
      <Page style={ReportStyles.body} wrap>
        <Section0 />
        <Section1 />
        {/* <Section1 /> */}
        <Footer />
      </Page>
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
