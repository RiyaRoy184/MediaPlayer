import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'

const Add = ({setAddResponseFromHome}) => {
  const [invalidYoutubeLink, setInvalidYoutubeLink] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    caption: "", imageUrl: "", youTubeLink: ""
  })
  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink = (userInputYoutubeLink) => {
    // steps for creating embed link from youtube link
    if (userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      console.log(userInputYoutubeLink.split("v=")[1].slice(0, 11));
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0, 11)
      setInvalidYoutubeLink(false)
      setVideoDetails({ ...videoDetails, youTubeLink:` https://www.youtube.com/embed/${videoId} `})
    } else {
      // alert("Invalid Youtube Link...Please try with other!!!")
      setInvalidYoutubeLink(true)
      setVideoDetails({ ...videoDetails, youTubeLink: "" })
    }
  }

  const handleUploadVideo = async () => {
    // object destructure : const {key1,key2,..} = object-name
    const { caption, imageUrl, youTubeLink } = videoDetails
    if (caption && imageUrl && youTubeLink) {
      // store video details permanently
      // alert("proceed to store video details permanently")
      try {
        const result = await saveVideoAPI(videoDetails)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          // video added to json file
          alert("video uploaded successfully")
          handleClose()
          // pass result to view component
          setAddResponseFromHome(result)
        } else {
          console.log(result);
        }

      }
      catch (err) {
        console.log(err);
      }
    }
    else {
      alert("Please fill the form!!!")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5">+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingCaption" label="Video Caption">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })}
                type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image URL">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })}
                type="text" placeholder="Video Image URL" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
              <Form.Control onChange={e => extractingEmbedLinkFromYoutubeLink(e.target.value)}
                type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            {
              invalidYoutubeLink &&
              <div className="text-danger fw-bolder mt-2">Invalid Youtube Link...Please try with other!!!</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>


  )
}

export default Add