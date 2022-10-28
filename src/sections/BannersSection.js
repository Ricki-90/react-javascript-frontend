import React from 'react'
import imageLetsBe from "./../assets/images/lets-be-img.png";
import imagePamela from "./../assets/images/pamela-reifs-img.png";


const BannersSection = () => {
  return (
    <section className="container d-flex gap-3 mb-5">
      <div>
        <img src={imagePamela} alt="image" />
      </div>
      <div>
          <img src={imageLetsBe} alt="image" />
      </div>
    </section>
  )
}

export default BannersSection