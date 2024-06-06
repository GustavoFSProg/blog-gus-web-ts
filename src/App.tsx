// import './App.css'
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import topo from "./assets/comida-topo.png";
import PostCard from "./components/PostCard/PostCard";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  background: lightgray;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const ImageTopo = styled.img`
  width: 1045px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 180px;
  }
`;
function App() {
  return (
    <>
      <AppContainer>
        <NavBar />
        <div>
          <ImageTopo src={topo} alt="topo comida" />
        </div>
        <div>
          <PostCard />
        </div>
      </AppContainer>
    </>
  );
}

export default App;
