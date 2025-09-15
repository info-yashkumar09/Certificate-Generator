import {StyleSheet, Font, PDFViewer} from "@react-pdf/renderer"
import Certificate from "./components/Certificate";
import PreviewComponent from "./components/PreviewComponent";

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  page:{
    padding: 40
  }

})

function App() {
  return <div>
    <PreviewComponent styles={styles}/>
  </div>
}

export default App