import React from 'react'
import InstaImage from './InstaImage'
import IgImage1 from '../../public/insta_1.jpg';
import IgImage2 from '../../public/insta_2.jpg';
import IgImage3 from '../../public/insta_3.jpg';
import IgImage4 from '../../public/insta_4.jpg';
import IgImage5 from '../../public/insta_5.jpg';
import IgImage6 from '../../public/insta_6.jpg';
 
const Instagram = ({handle}) => {
  return (
    <div className='mx-auto text-center text-white py-24 bg-black'>
        <p className='text-2xl font-bold'>Follow us on Instagram</p>
        <p className='pb-4'>{handle}</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstaImage socialImg={IgImage1}/>
            <InstaImage socialImg={IgImage2}/>
            <InstaImage socialImg={IgImage3}/>
            <InstaImage socialImg={IgImage4}/>
            <InstaImage socialImg={IgImage5}/>
            <InstaImage socialImg={IgImage6}/>
        </div>
    </div>
  )
}

export default Instagram