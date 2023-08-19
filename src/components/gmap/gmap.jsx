import React from 'react'
import Map from '../map/map'

const Gmap = () => {
  return (
    <div>
      <div>
      {/* Embed the Google Maps iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7780.568000900627!2d80.04243965366098!3d12.824915719181885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a52f70b3fa8de63%3A0xf9eed63e1272f28f!2sSRM%20College%20of%20Nursing%2C%20SRM%20UNIVERSITY-KTR%20CAMPUS%2C%201st%20Street%2C%20Potheri%2C%20SRM%20Nagar%2C%20Kattankulathur%2C%20Tamil%20Nadu!3m2!1d12.8246846!2d80.0494418!4m5!1s0x3a52f7ba8b57851d%3A0xc7371bc63c1ce409!2sKFC%2C%20Grand%20Southern%20Trunk%20Road%2C%20Guduvanchery%2C%20Chengalpattu%2C%20Tamil%20Nadu!3m2!1d12.834243299999999!2d80.04766649999999!5e0!3m2!1sen!2sin!4v1692481134594!5m2!1sen!2sin"
        width="100%"
        height='850' // Adjust this value as needed
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      <Map />
    </div>
  )
}

export default Gmap
