import styled from "styled-components";

const Main = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e5dd;
  color: #10100e;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    line-height: 1.1;
    padding: 2rem 4rem;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='7' stroke-dasharray='20' stroke-dashoffset='28' stroke-linecap='butt'/%3e%3c/svg%3e");
    margin: 2rem;

    h1 {
      background: #ffbd00;
      font-size: 4rem;
      margin: 0.5rem;
    }

    h2 {
      font-size: 3.8rem;
      color: #232220;
      font-weight: normal;
      margin: 0.5rem;
    }

    h3 {
      font-size: 3.8rem;
      color: #1d1c1a;
      font-weight: lighter;
    }
  }
`;

export default Main;
