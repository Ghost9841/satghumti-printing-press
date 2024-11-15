import { printing_data } from '@/assets/assets';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react'

interface PrintingPageProps {
  params:Promise<{
    id: number
  }>
}
interface PrintingPageData {
    id: number,
     title: string,
      description: string,
    image: string | StaticImageData, 
        completion: string,
}

const PrintingPage = ({params}:PrintingPageProps) => {
    const [data,getData] = useState<PrintingPageData | null>(null);

    const fetchPrintingData = async () => {
        for (let i = 0; i < printing_data.length; i++) {
            if (Number((await params).id)=== printing_data[i].id) {
                getData(printing_data[i]);
                console.log(printing_data[i]);
                break;
            }
        }
    }
    useEffect(() => {
      fetchPrintingData();
    }, [])
    

  return (data?<>
    <div>
      
    </div>
  </>:<></>
  )
}

export default PrintingPage;
