import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  name?: string;
  error?: string; 
  width?: string;  
  height?: string; 
}

const StyledInput = styled.input<{ $error?: string; $width?: string; $height?: string }>`
  border-radius: 0.5rem;
  color: #5f5f5f;
  border: ${({ $error }) => ($error ? "1px solid #f79393" : "1px solid #e2e8f0")};
  background-color: white;

  width: ${({ $width }) => $width || "200px"};
  height: ${({ $height }) => $height || "40px"};

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 3px #587affa7;
  }
`;

export const Input = ({
  placeholder,
  type = "text",
  name,
  error,
  width,  
  height, 
  ...props
}: InputProps) => {
  return (
    <>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        $error={error}
        $width={width} 
        $height={height} 
        {...props}
      />
      {error && <p style={{ color: "#f79393", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
    </>
  );
};

export default Input;
