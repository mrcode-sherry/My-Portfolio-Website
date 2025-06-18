import Contact from '@/components/Contact'
import ContactHero from '@/components/ContactHero'
import React from 'react'

const page = () => {
  return (
    <>
    <div>
      <section>
        <ContactHero/>
      </section>
    </div>
          <div className="">
      <section>
        <Contact/>
      </section>
    </div>
    </>
  )
}

export default page
