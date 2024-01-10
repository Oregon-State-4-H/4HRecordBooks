import { useState, useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./Resume.jsx";


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
