import { Document, Page, Text } from '@react-pdf/renderer'

const Certificate = ({styles}) => {
  return (
    <Document>
        <Page style={styles.page}>
            <Text>Hello React PDF</Text>
        </Page>
    </Document>
  )
}

export default Certificate