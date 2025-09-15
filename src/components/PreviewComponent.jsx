import React from 'react'
import Certificate from './Certificate'
import { PDFViewer } from '@react-pdf/renderer'

const PreviewComponent = ({styles}) => {
  return (
    <div className='lg:col-span-2'>
        <PDFViewer width="100%" height="100%" className='min-h-[500px]'>
            <Certificate styles={styles}/>
        </PDFViewer>
    </div>
  )
}

export default PreviewComponent