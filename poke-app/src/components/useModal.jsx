import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const UseModal = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onhide}
        imagemodal={props.imagemodal}
        pokemoninfo={props.pokemoninfo}
        error={props.error}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Buy your Pokemon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.imagemodal && !props.error ? (
            <div>
              <img src={props.imagemodal} className="image"></img>
              <p>Wow ! you got {props.pokemoninfo.name}</p>
            </div>
          ) : (
            <p>{props.error}</p>
          )}

          <Button variant="primary" onClick={props.getrandompokemon}>
            Buy a Pokemon
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UseModal;