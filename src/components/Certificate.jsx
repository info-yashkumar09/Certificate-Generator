import { Document, Image, Page, Text, View } from '@react-pdf/renderer'

const Certificate = ({styles}) => {
  return (
    <Document>
        <Page style={styles.page}>
            <View style={styles.border}>
                <Image style={styles.logo} src="https://images.unsplash.com/photo-1757137910091-1cf071030691?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"/>
                <Text style={styles.title}>Certificate of Achievement</Text>
                <Text style={styles.subtitle}>This Certificate is proudly presented to</Text>
                <Text style={styles.name}>{name || "Your name here"}</Text>
                <Text style={styles.body}>For Outstanding performance and dedication. We celebrate your achievement and wish you continued success.</Text>
                <View style={styles.footer}>
                    <Text style={styles.signature}>Signature</Text>
                    <Text style={styles.signature}>Director</Text>
                </View>
                <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
            </View>
        </Page>
    </Document>
  )
}

export default Certificate