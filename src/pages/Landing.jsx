import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.jpg'
import feature1 from '../assets/m1.jpg'
import feature2 from '../assets/m2.jpg'
import feature3 from '../assets/m3.jpeg'
import { Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div className="container">
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className="text-warning">Media Player</span> </h3>
          <p style={{ textAlign: 'justify' }}>
            Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the
            provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!
          </p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={landingImg} alt="Landing Image" className="img-fluid ms-5" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20 rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20 rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20 rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* last part */}
       <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Play Everything</span> 
           : Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur dicta tempora 
           quaerat voluptatum deserunt ullam eum pariatur nihil eos fugiat, labore aut dolore voluptatem
            expedita, porro distinctio nemo doloremque. </p>
            <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Categorise Videos</span> 
           : Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur dicta tempora 
           quaerat voluptatum deserunt ullam eum pariatur nihil eos fugiat, labore aut dolore voluptatem
            expedita, porro distinctio nemo doloremque. </p>
            <p style={{textAlign:'justify'}}> <span className="fs-5 fw-bolder">Managing History</span> 
           : Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur dicta tempora 
           quaerat voluptatum deserunt ullam eum pariatur nihil eos fugiat, labore aut dolore voluptatem
            expedita, porro distinctio nemo doloremque. </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="514" src="https://www.youtube.com/embed/UVb6QOKy0bI" 
        title="Bougainvillea Trailer | October 17 | Jyothirmayi | Kunchacko Boban | Amal Neerad |
         Fahadh Faasil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
       </div>
    </div>
  )
}

export default Landing