import { useState } from 'react';
import Modal from 'react-bootstrap';

// TODO: Implement Edit Modal 

function EditSong(props) {
    const [show, setShow] = useState(false);
    const [song, setSong] = useState ({
        genre: props.song.genre,
        artist: props.song.artist,
        title: props.song.title,
        album: props.song.album,
        release_date: props.song.release_date
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addSong(this.state)
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default EditSong;