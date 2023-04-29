import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { AddMedicine } from '../Actions/Medicine.Actions';

function Model({ show, setShow }) {

    const dispatch = useDispatch();
    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 100),
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
        }
        dispatch(AddMedicine(formData))
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control name="quantity" type="number" placeholder="Enter Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name="price" type="number" placeholder="Enter Price" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn btn-danger' variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className='btn btn-success' variant="success" type='submit'>
                            Add Product
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default Model;