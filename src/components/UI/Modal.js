import React, { Fragment } from 'react';
import ReactDOM  from 'react-dom';

import classes from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children} </div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

// We used create portal which we imported from ReactDom
// Also a react create Portal needs 2 arguments (what to portal, where to portal it)
export default Modal;
