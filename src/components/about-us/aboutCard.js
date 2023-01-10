import React, { Component } from 'react'
import PropTypes from 'prop-types';

function AboutCard({text1}) {
  return (
    <article>
      <h2>{text1}</h2>
    </article>
  )
}


AboutCard.propTypes = {
    text1: PropTypes.string.isRequired,
}
export default AboutCard