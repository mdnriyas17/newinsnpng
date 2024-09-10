import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Blogsingle from "./Pages/Singleblogs";
import Blog from "./Pages/Blog";
import styled from "styled-components";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState("");

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
    setSelectedOption("");
    setResult("");
  };

  const handleOptionSelect = (option) => setSelectedOption(option);

  const handleSubmit = () => {
    switch (selectedOption) {
      case "Option 1":
        setResult("Please Enter Your Query On Contect Us Page");
        break;
      case "Option 2":
        setResult("We offer Web Development Services, Web Designing Services, Digital Marketing,E-Commerce Application,Ui/Ux Designs,POS Softwares,Management Systems and much more");
        break;
      case "Option 3":
        setResult("Option 3 selected");
        break;
      case "Option 4":
        setResult("Option 4 selected");
        break;
      default:
        setResult("No option selected");
        break;
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<Blogsingle />} />
      </Routes>
      {/* <ChatButton onClick={toggleChatBox}>Chat</ChatButton>
      {isOpen && (
        <ChatContainer>
          <ChatHeader>
            <h4>Chat with us</h4>
            <CloseButton onClick={toggleChatBox}>X</CloseButton>
          </ChatHeader>
          <ChatBody>
            <OptionsContainer>
              <OptionButton onClick={() => handleOptionSelect("Option 1")}>
               Do you have any questions?
              </OptionButton>
              <OptionButton onClick={() => handleOptionSelect("Option 2")}>
                What are Services we offer?
              </OptionButton>
              <OptionButton onClick={() => handleOptionSelect("Option 3")}>
                Option 3
              </OptionButton>
              <OptionButton onClick={() => handleOptionSelect("Option 4")}>
                Option 4
              </OptionButton>
             
            </OptionsContainer>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            {result && <ResultMessage>{result}</ResultMessage>}
          </ChatBody>
        </ChatContainer>
      )} */}
    </>
  );
};

export default App;

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const ChatBody = styled.div`
  padding: 10px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const OptionButton = styled.button`
  padding: 10px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultMessage = styled.p`
  margin-top: 10px;
  color: green;
  font-weight: bold;
`;