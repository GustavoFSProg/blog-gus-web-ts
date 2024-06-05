// import './App.css'
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import topo from "./assets/comida-topo.png";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: lightgray;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border: 1px solid gray;
  align-items: flex-start;
  margin-top: 30px;
`;

function App() {
  return (
    <>
      <AppContainer>
        <NavBar />
        <div>
          <img style={{ width: "62vw" }} src={topo} alt="topo comida" />
        </div>
        <div>
          <PostContainer>
            <img style={{ width: "59vw" }} src={topo} alt="topo comida" />
          </PostContainer>
        </div>
      </AppContainer>
    </>
  );
}

export default App;
