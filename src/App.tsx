// import './App.css'
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import topo from "./assets/comida-topo.png";
import paos from "./assets/paos.png";

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
  width: 60vw;
  height: auto;
  border: 1px solid gray;
  align-items: flex-start;
  margin-top: 29px;
`;

const Post1 = styled.div`
  display: flex;
  width: 28rem;
  height: auto;
  border: 1px solid gray;
  align-items: flex-start;
  background: white;
  padding: 30px;
  flex-direction: column;
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
            <img height="350" width="516" src={paos} alt="paos" />
            <Post1>
              <div>Administrador 9 aaaa</div>
              <div>
                <h1>A Casa do Pão</h1>
              </div>
              <div style={{ marginTop: "-22px", lineHeight: "23px" }}>
                <p>
                  Crie um subtítulo para o post no blog que resume numa frase
                  curta e atraente o seu post. Assim seus leitores vão querer
                  continuar a ler....
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  borderTop: "1px solid gray",
                  marginTop: "100px",
                  fontSize: "14px",
                }}
              >
                <p>0 visualização</p>
                <p style={{ marginLeft: "12px" }}> 0 comentário 1</p>
              </div>
            </Post1>
          </PostContainer>
        </div>
      </AppContainer>
    </>
  );
}

export default App;
