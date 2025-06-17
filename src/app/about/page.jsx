import Portfolio from '@/components/Portfolio'
import Price from '@/components/Price'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
          <div className="mt-25">
      <section>
        <Portfolio/>
      </section>
    </div>
    <div className="mt-25">
      <section>
        <Price/>
      </section>
    </div>
    <div className="mt-25">
      <section>
        <Testimonial/>
      </section>
    </div>
    </div>
  )
}

export default page
