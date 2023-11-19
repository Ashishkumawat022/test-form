import React, { useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import cx from "./Form.module.scss";
import { MdAttachment } from "react-icons/md";

const Form = () => {
  const [firstshow, SetfirstShow] = useState(true);
  const [secondshow, SetsecondShow] = useState(false);
  const [thirdshow, SetthirdShow] = useState(false);
  const [fourthshow, SetfourthShow] = useState(false);
  const [thanksshow, SetthanksShow] = useState(false);


  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [dob, SetDob] = useState("");
  const [number, SetNumber] = useState("");

  
    // console.log(name)
    // console.log(email)
    // console.log(dob)
    // console.log(number)

    // const [data, SetData] = useState([]);
    // useEffect(() => {
    //    localStorage. setItem('basic', JSON. stringify(data));
    //    }, [data]);

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center py-4">
              <h1>Enrollment Form</h1>
            </div>
          </Col>
        </Row>
        
        {firstshow && (
          <section>
            <Container>
              <div>
                <Row>
                  <Col lg={6} className="m-auto">
                    <div className={`${cx.form_details}`}>
                      <h3>Basic Details</h3>
                      <label>1. Name*</label>
                      <input type="text" placeholder="Name" value={name}
                       onChange={(e)=>
                        SetName(e.target.value)
                      } />
                      <br />
                      <label>2. Email*</label>
                      <input
                        type="email"
                        placeholder="Example - userid@gmail.com"
                        onChange={(e)=>SetEmail(e.target.value)}
                      />
                      <br />
                      <label>3. DOB</label>
                      <input type="date" 
                       onChange={(e)=>SetDob(e.target.value)}
                       />
                      <label>4. Contact No.</label>
                      <input
                        type="number"
                        placeholder="Enter your 10 digit contact no"
                        onChange={(e)=>SetNumber(e.target.value)}
                      />
                    </div>
                    <div className={`${cx.next_btn}`}>
                      <Button
                        variant="primary"
                        onClick={() => {
                          SetfirstShow(false);
                          SetsecondShow(true);
                          SetthirdShow(false);
                         
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        )}
        {secondshow && (
          <section>
            <Container>
              <Col lg={6} className="m-auto">
                <div className={`${cx.form_details}`}>
                  <h3>Documents Required</h3>
                  <label>1. 10th Marksheet*</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>2. 12th Marksheet*</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>3. Graduation Marksheet*</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>4. Post Graduation Marksheet</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>5. Offer Letter*</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>6. Salary Slips*</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>7. Bank Statement*</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>8. Increment Letter (if any)</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                  <label>9. Others (if any)</label>
                  <div className={`${cx.upload_doc}`}>
                    <div className={`${cx.attach_icon}`}>
                      <MdAttachment /> <span>Attach file upto 5kb</span>
                    </div>
                    <input type="file" />
                  </div>
                  <br />
                </div>
                <div className={`${cx.next_btn}`}>
                  <Button
                    variant="primary"
                    onClick={() => {
                      SetfirstShow(false);
                      SetsecondShow(false);
                      SetthirdShow(true);
                    }}
                  >
                    Next
                  </Button>
                </div>
              </Col>
            </Container>
          </section>
        )}
        {thirdshow && (
          <section>
            <Container>
              <Col lg={6} className="m-auto">
                <div className={`${cx.form_details}`}>
                  <h3>Statement of Purpose</h3>
                  <label>
                    1. Tell me about a time you were asked to do something you
                    had never done before. How did you react? What did you
                    learn?
                  </label>
                  <textarea
                    placeholder="Enter a description for the long answer"
                    rows={3}
                    style={{ width: "100%" }}
                  />
                  <span className={`${cx.word_limit}`}>300 word limit</span>
                  <label>
                    2. Tell me about the last time something significant didn’t
                    go according to plan at work. What was your role? What was
                    the outcome?
                  </label>
                  <textarea
                    placeholder="Enter a description for the long answer"
                    rows={3}
                    style={{ width: "100%" }}
                  />
                  <span className={`${cx.word_limit}`}>300 word limit</span>
                  <label>
                    3. What are the three things that are most important to you
                    in a job?
                  </label>
                  <textarea
                    placeholder="Enter a description for the long answer"
                    rows={3}
                    style={{ width: "100%" }}
                  />
                  <span className={`${cx.word_limit}`}>300 word limit</span>
                </div>
                <div className={`${cx.next_btn}`}>
                  <Button variant="primary"  onClick={() => {
                          SetfirstShow(false);
                          SetsecondShow(false);
                          SetthirdShow(false);
                          SetfourthShow(true)
                        }}>Next</Button>
                </div>
              </Col>
            </Container>
          </section>
        )}
        {fourthshow && (
          <section>
            <Container>
            <Col lg={6} className="m-auto">
                    <div className={`${cx.form_details}`}>
                      <h3>Interview Availability</h3>
                      <label>1. Email*</label>
                      <input
                        type="email"
                        placeholder="Example - userid@gmail.com"
                      />
                      <br />
                      <label>2. Location</label>
                      <input
                        type="text"
                        placeholder="Search or enter your location "
                      />
                      <br />
                      <label>3. Interview Date</label>
                      <input type="date" />
                      <label>4. Interview Time</label>
                      <input
                        type="time"
                        placeholder=""
                      />
                      <br/>
                      <label>5. Time Zone</label>
                     <select name="" id="">
                        <option value="timezone">Time Zone</option>
                     </select>
                      <label>6. Interview Medium</label>
                      <select name="" id="">
                        <option value="Interview Medium">Interview Medium</option>
                     </select>
                    </div>
                    <div className={`${cx.next_btn}`}>
                      <Button
                        variant="primary"
                        onClick={() => {
                          SetfirstShow(false);
                          SetsecondShow(false);
                          SetthirdShow(false);
                          SetfourthShow(false);
                          SetthanksShow(true);
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
            </Container>
          </section>
        )} 
        {thanksshow && (
          <section>
            <Container>
            <Col lg={6} className="m-auto">
                    <div className={`${cx.form_details}`}>
                      <h3>Thank You!</h3>
                    </div>
                  </Col>
            </Container>
          </section>
        )} 

        
      </Container>
    </>
  );
};

export default Form;
