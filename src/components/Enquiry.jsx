import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EnquiryPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Control the duration of AOS animations
    });
  }, []);

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };
    
    axios
      .post('https://zohomailer.onrender.com/email', { message: data })
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
    <Container>
      <FormWrapper>
        <Title>Enquiry Form</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <div style={{ flex: 1 }}>
              <Label htmlFor="name" data-aos="fade-up">Name</Label>
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
              <Label htmlFor="email" data-aos="fade-up" data-aos-delay="100">Email</Label>
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
              <Label htmlFor="phone" data-aos="fade-up" data-aos-delay="200">Phone</Label>
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
              <Label htmlFor="message" data-aos="fade-up" data-aos-delay="300">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                required
              />
            </div>
          </FormGroup>

          <Button type="submit" >Send Enquiry</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default EnquiryPage;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;

  @media (max-width: 425px) {
    padding: 20px;
    min-height: 50vh; // Adjusting height for small screens
  }

  @media (max-width: 320px) {
    padding: 15px;
    min-height: 40vh; // Further reducing height for very small screens
  }
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 900px;
  border: 1px solid #e0e0e0;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 425px) {
    padding: 20px; // Adjusting padding for small screens
  }

  @media (max-width: 375px) {
    padding: 15px; // Further reducing padding for smaller screens
  }

  @media (max-width: 320px) {
    padding: 10px; // Further reducing padding for very small screens
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 25px;
  text-align: center;
  color: #333;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #1a73e8;
    outline: none;
    box-shadow: 0 0 8px rgba(26, 115, 232, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #1a73e8;
    outline: none;
    box-shadow: 0 0 8px rgba(26, 115, 232, 0.5);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(135deg, #ff4b2b, #ff416c);
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(255, 65, 108, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 16px rgba(255, 65, 108, 0.4);
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

