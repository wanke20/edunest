import React from 'react';
import classroom from './pictures/classroom.jpg';
import shopping from './pictures/shopping.jpeg';
import './Aboutus.scss';

const Aboutus = () => {
  return (
    <div>
      <div className='inline-flex'>
        <div className='aboutus'>
          <h1>Inspiring Classrooms, One Supply at a Time.</h1>
          <p>At Edunest, we believe that every lesson holds the potential to inspire, enlighten, and transform young minds. But behind every impactful lesson lies the quiet support of essential teaching tools and resources.</p>
          <h1>Empowering Teachers Through Convenience</h1>
          <p>
            It all began with a simple observation: teachers, the architects of our future, spend a significant amount of time, effort, and out-of-pocket money in search of the right teaching materials. From markers to modular desks, sourcing the perfect supplies often becomes an added task on an already overflowing to-do list.<br /><br />

            We wondered, "What if we could make this process simpler? What if teachers could spend less time shopping and more time teaching?”<br /><br />

            And thus, Edunest was born.
          </p>
        </div>
        <img src={classroom} alt=""></img>
      </div>
      <div className='inline-flex'>
        <img src={shopping} height={350} alt=""></img>
        <div className='aboutus'>
          <h1 className='what-we-offer'>What We Offer</h1>
          <div className='what-we-offer'>
            <div>
              <h3>Curated Selection:</h3>
              <p>Handpicked by educators, for educators. We've sifted through countless products to bring you the best in quality and value.</p>
            </div>
            <div>
              <h3>One-Stop Shop:</h3>
              <p>From basic stationary to advanced classroom tech, we've got everything you'd need to create a conducive learning environment.</p>
            </div>
            <div>
              <h3>Hassle-Free Returns:</h3>
              <p>
                While not yet complete, it is our intent to implement a hassle-free return feature,
                as we understand that not every product fits ever classroom.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='vision-statement'>
        <h1 className='our-vision'>Our Vision</h1>
        <p>Our goal is more than just creating an e-commerce platform. We envision a community where educators can not only shop but also share ideas, resources, and experiences. A space where the collective goal is to improve the teaching experience, thereby enriching the learning journey for students everywhere.</p>
      </div>
    </div>
  )
}

export default Aboutus