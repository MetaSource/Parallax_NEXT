import React from 'react'

const Hero = ({businessName, city, buttonLabel}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-device sm:bg-device-sm bg-center bg-scroll sm:bg-fixed bg-cover'>
        {/*overlay*/}
        <div className='absolute h-screen top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' />

        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl cinzel'>{businessName}</h2>
            <p className='cinzel py-5 text-xl'>{city}</p>
            <button className='px-8 py-2 border'>{buttonLabel}</button>
        </div>
    </div>
  )
}

export default Hero