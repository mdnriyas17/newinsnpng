// src/EnquiryPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import aos from 'aos';
const Container = styled.div`
 
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px; /* Updated max-width */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  background: #0a0d50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EnquiryPage = () => {

  useEffect(() => {
    aos.init();
  }, []);

  // State to hold form values
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };
    
    axios
      .post('https://for-zohomailer.onrender.com/email', { message: data })
      .then((response) => {
        console.log(response);
        alert('Enquiry submitted successfully!');
        setValues({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <Container data-aos="fade-up">
      <FormWrapper>
        <Title>Enquiry Form</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <div style={{ flex: 1 }}>
              <Label htmlFor="name" data-aos="fade-up" data-aos-duration="1000">Name</Label>
              <Input 
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label htmlFor="email" data-aos="fade-up" data-aos-duration="1500">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
          </FormGroup>

          <FormGroup>
            <div style={{ flex: 1 }}>
              <Label htmlFor="phone" data-aos="fade-up" data-aos-duration="2000">Phone</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label htmlFor="message" data-aos="fade-up" data-aos-duration="2500">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                required
              />
            </div>
          </FormGroup>

          <Button type="submit" data-aos="fade-right" data-aos-duration="3000">Send Enquiry</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default EnquiryPage;
