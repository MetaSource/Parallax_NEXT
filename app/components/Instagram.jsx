import React from 'react'
import InstaImage from './InstaImage'
{/*
import IgImage1 from '../../public/insta_1.jpg';
import IgImage2 from '../../public/insta_2.jpg';
import IgImage3 from '../../public/insta_3.jpg';
import IgImage4 from '../../public/insta_4.jpg';
import IgImage5 from '../../public/insta_5.jpg';
import IgImage6 from '../../public/insta_6.jpg';
*/}
import { InstagramData } from './InstagramData';

const Instagram = ({handle}) => {
  return (
    <div className='mx-auto text-center text-white py-24 bg-black'>
        <p className='text-2xl font-bold'>Follow us on Instagram</p>
        <p className='pb-4'>{handle}</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstaImage socialImg={InstagramData[0].image}/>
            <InstaImage socialImg={InstagramData[1].image}/>
            <InstaImage socialImg={InstagramData[2].image}/>
            <InstaImage socialImg={InstagramData[3].image}/>
            <InstaImage socialImg={InstagramData[4].image}/>
            <InstaImage socialImg={InstagramData[5].image}/>
        </div>
    </div>
  )
}

export default Instagram