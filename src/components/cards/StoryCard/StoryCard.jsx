import React from 'react'
import './StoryCard.css'

const StoryCard = () => {
  return (
    <>
      <section className="front-intro ">
          <div className="content">
            <h2 className="heading1">Our Story</h2>
            <h1 className="headline">Welcome To Royale</h1>
            <p>
              Mobile app development is rapidly growing. From retail,
              telecommunications and e-commerce to insurance, healthcare and
              government, organizations across industries must meet user
              expectations for real-time, convenient ways to conduct
              transactions and access information. Today, mobile devices—and the
              mobile applications that unlock their value—are the most popular
              way for people and businesses to connect to the internet. To stay
              relevant, responsive and successful, organizations need to develop
              the mobile applications that their customers, partners and
              employees demand.
              Mobile app development is rapidly growing. From retail,
              telecommunications and e-commerce to insurance, healthcare and
              government, organizations across industries must meet user
              expectations for real-time, convenient ways to conduct
              transactions and access information. Today, mobile devices—and the
              mobile applications that unlock their value—are the most popular
              way for people and businesses to connect to the internet. To stay
              relevant, responsive and successful, organizations need to develop
              the mobile applications that their customers, partners and
              employees demand.
            </p>
          </div>

          <figure className="image-wrap">
            <img src="assets/fruits/vegetables.jpg" alt="main" />
          </figure>
        </section>
        {/* End Front Intro Section  */}
    </>
  )
}

export default StoryCard
