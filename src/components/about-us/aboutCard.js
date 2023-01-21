
/* import PropTypes from 'prop-types'; */
import styles from './aboutCard.module.css';

export default function AboutCard({ name, desc, imgURL }) {
  return (
    <article>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ imgURL } className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> { name } </h5>
              <p className="card-text">{ desc }</p>
            </div>
          </div>
        </div>
      </div>




      {/* <img src={imgURL} alt=''/>
      <div classNameName='card-body text-light'>
        <h4 classNameName='card-title'>{name}</h4>
        <p classNameName='card-text text-secondary'>
          {
            desc
          }
        </p>
      </div> */}
    </article>



  )
}