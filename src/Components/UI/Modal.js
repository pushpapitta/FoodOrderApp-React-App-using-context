import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
//we want to use react portal for both backdrop and overlay and we want to render the model overlay itself
//to make sure that html code for backdrop and overlay is not over all placesin the final application
//we are using portals
//now this will be above root element.
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};


const ModalOverlay = (props) => {
    return (
        <div className={classes.modal} >
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

//2 dynamic expressions side by side and call create prtal method biult into react
//createPortal requires a second argument i.e) where to portal it?

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};
export default Modal;