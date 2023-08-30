import React from 'react'
import InstaImage from './InstaImage'
import IgImage from '../../public/insta-1.jpg';
 
const Instagram = ({handle}) => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow us on Instagram</p>
        <p className='pb-4'>{handle}</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstaImage socialImg={IgImage}/>
            <InstaImage socialImg={IgImage}/>
            <InstaImage socialImg={IgImage}/>
            <InstaImage socialImg={IgImage}/>
            <InstaImage socialImg={IgImage}/>
            <InstaImage socialImg={IgImage}/>
        </div>
    </div>
  )
}

export default Instagram