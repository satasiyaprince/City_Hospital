import React, { useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, DeleteMedicine, increment } from '../Actions/Medicine.Actions'
import { IconButton } from '@mui/material'; 
import Model from '../Component/Model';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModelEdit from '../Component/ModelEdit';

const Medicine = () => {

    const [show, setShow] = useState(false);
    const [eshow, setEshow] = useState(false);
    const [Edata, setEdata] = useState({})


    const addData = useSelector((state) => state.addMedicine)

    const Medicine = useSelector((state) => state.UpadateMedicine)

    const dispatch = useDispatch()


    const onClickInc = () => {
        dispatch(increment())
    }

    const onClikDec = () => {
        dispatch(decrement())
    }

    const medicinesModel = () => {
        setShow(true);
    }

    const handleDelete = (id) => {
        if(window.confirm("Are you sure to Delete this data?")) {
            dispatch(DeleteMedicine(id))
        }
    }

    const handleEdit = (data) => {
        setEshow(true);
        setEdata(data);
    }


    return (
        <div>

            <Model show={show} setShow={setShow} />
            <ModelEdit show={eshow} setShow={setEshow} data={Edata} />

            <Button variant='primary' onClick={medicinesModel}>Add Medicine</Button>

            <br /><br />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addData.map((i) => {
                            return (
                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.quantity}</td>
                                    <td>{i.price}</td>
                                    <td>
                                        <IconButton aria-label='delete' color="error" onClick={() => handleDelete(i.id)}><DeleteIcon /></IconButton>
                                        <IconButton aria-label='edit' color="primary" onClick={() => handleEdit(i)}><EditIcon/></IconButton>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <tr>
                <td> <Button onClick={onClickInc}>+</Button>{Medicine}<Button onClick={onClikDec}>-</Button></td>
            </tr>
        </div>
    );
};

export default Medicine;