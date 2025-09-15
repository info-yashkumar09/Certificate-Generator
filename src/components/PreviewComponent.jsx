import React from 'react'
import Certificate from './Certificate'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

const PreviewComponent = ({certificateData, styles}) => {
  return (
    <div className='lg:col-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col'>
        <h1 className='text-xl font-semibold mb-4'>Certificate Preview</h1>
        <div className='flex-1 border rounded-lg overflow-hidden min-h-[500px]'>
            {certificateData.name ? (
                <PDFViewer key={Date.now()} width="100%" height="100%" className='min-h-[500px]'>
                    <Certificate {...certificateData} styles={styles}/>
                </PDFViewer> 
            ):(
                <div className='flex justify-center items-center h-full text-center'>
                    Enter Details to Generate Preview
                </div>
            )}
        </div>
        <div className='mt-4'>
            <PDFDownloadLink key={Date.now()} document={<Certificate {...certificateData} styles={styles}/>} fileName="certificate.pdf">
            {({loading})=>(
                <button disabled={loading || !certificateData.name} className={`w-full py-3 rounded-lg ${loading || !certificateData.name ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"} text-white font-medium shadow cursor-pointer`}>
                    {loading ? "Preparing certificate..." : "Download certificate"}
                </button>
            )}
            </PDFDownloadLink>
        </div>
    </div>
  )
}

export default PreviewComponent