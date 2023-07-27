import { styled } from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.$borderColor ? `2px solid ${props.$borderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.fontSize}px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  borderColor,
  fontSize,
  borderRadius,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      $textColor={textColor}
      $bgColor={bgColor}
      $borderColor={borderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  bgColor: "none",
  textColor: "#000",
  width: "175px",
  height: "56px",
  fontSize: 18,
  borderColor: "#000",
};
