import React from 'react'

const ElegantContact = () => {
  return (
    <section id='contact' className="bg-white sm:pt-24 sm:pb-24 p-4" 
        style={{
            maxWidth: '650px',
            margin:'0 auto',     
        }}>
    <h1 className="text-2xl p-4 text-center">Get in touch</h1>
    <form className="grid grid-cols-2 gap-8">
       <div className="mt-[32px] mb-[32px] ml-0 mr-0 ">
       <label className="label" htmlFor="name"
            style={{
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontWeight: '400',
                    color: '#888',
                    cursor: 'text',
                    transition: 'transform .2s ease-in-out',
                }}> Name</label>
          <input style={{
                display: 'block', 'width': '100%',
                height: '36px',
                borderWidth: '0 0 2px 0',
                borderColor: '#000',
                fontSize: '18px',
                lineHeight: '26px',
                fontWeight: '400'
            }} id="name" className="input-text js-input" type="text" required />
          
       </div>
       <div className="mt-[32px] mb-[32px] ml-0 mr-0">
       <label className="label" htmlFor="email" style={{
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontWeight: '400',
                    color: '#888',
                    cursor: 'text',
                    transition: 'transform .2s ease-in-out',
                }}>E-mail</label>
          <input 
            id="email" 
            className=" input-text js-input" 
            type="email"
            style={{
                display: 'block', 'width': '100%',
                height: '36px',
                borderWidth: '0 0 2px 0',
                borderColor: '#000',
                fontSize: '18px',
                lineHeight: '26px',
                fontWeight: '400'
            }}
            required />
          
       </div>
       <div className='col-span-2'>
       <label className="label" htmlFor="message" style={{
                    fontSize: '18px',
                    lineHeight: '26px',
                    fontWeight: '400',
                    color: '#888',
                    cursor: 'text',
                    transition: 'transform .2s ease-in-out',
                }}>Message</label>
          <input id="message" style={{
                display: 'block', 
                width: '100%',
                height: '36px',
                borderWidth: '0 0 2px 0',
                borderColor: '#000',
                fontSize: '18px',
                lineHeight: '26px',
                fontWeight: '400'
            }} className="input-text js-input" type="text" required />
          
       </div>
       <div className="mt-[32px] mb-[32px] ml-0 mr-0 col-span-2 text-center">
          <input style={{
                    display: 'inline-block',
                    backgroundColor: '#fff',
                    color: '#000',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    padding: '8px 16px',
                    cursor: 'pointer',
                }}
            className="border border-black submit-btn" type="submit" value="Submit" />
       </div>
    </form>
 </section>
  )
}

export default ElegantContact