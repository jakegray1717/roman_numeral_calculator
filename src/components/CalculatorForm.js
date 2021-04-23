import React from 'react';
import { Form, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';

const CalculatorForm = ({ setFirstNum, setSecondNum, radioValue, setRadioValue, radios }) => {

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Control type="number" placeholder="Select a number" onChange={(e) => setFirstNum(parseInt(e.target.value))}/>
          </Col>
          <Col>
            <ButtonGroup toggle>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Select a number" onChange={(e) => setSecondNum(parseInt(e.target.value))} />
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default CalculatorForm;