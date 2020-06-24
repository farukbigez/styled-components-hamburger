import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledMenu = styled.nav<Props>`
  display: none;

  a {
    padding: 18px 10px;
    color: #000000;
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .sign-in{
  width: 180px;
  height: 30px;
  background: #090909;
  border-radius: 92px;
  margin-top: 10rem;
  color: #fff;
  text-align: center;
  }

  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #E5E5E5;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    list-style: none;
    display: flex;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
  }

`