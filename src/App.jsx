import {StyleSheet, Font, PDFViewer} from "@react-pdf/renderer"
import Certificate from "./components/Certificate";
import PreviewComponent from "./components/PreviewComponent";

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  page:{
    padding: 40,
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#fdfdfd',
    height: '100%'
  },
  border:{
    border: "5pt solid #1d4ed8",
    padding: 20,
    borderRadius: 10,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  logo:{
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 60,
    objectFit: "cover"
  },
  title:{
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Oswald',
    color: "#1d4ed8"
  },
  subtitle:{
    fontSize: 18,
    marginBottom: 40,
    fontFamily: "Times-Roman",
    color: "#444"
  },
  name:{
    fontSize: 26,
    marginVertical: 20,
    fontFamily: "Oswald",
    color: "#111"
  },
  body:{
    fontSize: 16,
    marginBottom: 40,
    fontFamily: "Times-Roman"
  },
  footer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontalL: 40
  },
  signature:{
    borderTop: "1pt solid #000",
    width: 150,
    textAlign: "center",
    paddingTop: 5,
    fontSize: 12,
    fontFamily: "Times-Roman"
  },
  date:{
    marginTop: 20,
    fontSize: 12,
    color: "grey"
  }

})

function App() {
  return <div>
    <PreviewComponent styles={styles}/>
  </div>
}

export default App