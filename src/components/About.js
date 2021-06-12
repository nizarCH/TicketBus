import React from 'react'

const About = () => {
    return (
        <div>
        <div className="jumbotron justify-content-center text-center py-4">
        <div className="col-11 col-md-10 col-lg-9">
            <h2>Hello again</h2>
            <p className="lead">Leader</p>
        </div>
        </div>
        <div className="jumbotron bg-sucess justify-content-center text-center py-4">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img className="d-block w-100" src="./images/AIT_AYMANE.jpeg" alt="First slide"/>
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src="./images/ALMOU.jpeg" alt="Second slide"/>
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src="./images/ATLAS.jpeg" alt="Third slide"/>
    </div>

  </div>

  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        
</div>


        </div>

    )
}

export default About
