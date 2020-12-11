import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "var(--anchor-color)" : "var(--gray)"};
  color: ${ props => props.primary ? "white" : "var(--white)"};

font-size: 1.1rem;
padding: 0.5rem 1.25rem;
border: ${props => props.primary ? "2px solid var(--anchor-color)" : "2px solid var(--gray)"};
border-radius: 2px;
font-weight: 700;
&:hover {
  cursor: pointer;
}
`;

export default Button