import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  background: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}!`);
  };

  return (
    <FormContainer>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input type="email" placeholder="Your Email" />
        <Button type="submit">Send</Button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
