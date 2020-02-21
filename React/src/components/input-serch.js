import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const InputSearch = (props) =>{
    return(
       <div>           
            <Row>
                <InputGroup className="mb-3 pl-5 pr-5 pt-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row> 
       </div>
    )
}


export default InputSearch

