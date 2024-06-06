// import './App.css'
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import topo from "./assets/comida-topo.png";
import paos from "./assets/paos.png";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";

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
  padding: 37px;
  padding-bottom: 13px;
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
            <img height="360.5" width="516" src={paos} alt="paos" />

            <Post1>
              <div style={{ display: "flex" }}>
                <RxAvatar
                  style={{
                    fontSize: "35px",
                    marginTop: "-1px",
                    color: "darkblue",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "13px",
                    marginLeft: "6px",
                    marginTop: "1px",
                  }}
                >
                  <span>Administrador</span>
                  <span style={{ marginTop: "-2px" }}>04/05/2024</span>
                </div>
              </div>
              <div>
                <h1>A Casa do Pão</h1>
              </div>
              <div
                style={{
                  marginTop: "-22px",
                  lineHeight: "23px",
                  fontSize: "16px",
                  fontFamily: "Open Sans",
                }}
              >
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
                  marginTop: "60px",
                  fontSize: "14px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <p>0 visualização</p>
                  <p style={{ marginLeft: "12px" }}> 0 comentário</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "55%",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>1</span>
                  <FaRegHeart
                    style={{
                      color: "red",
                      fontSize: "18px",
                      marginLeft: "5px",
                    }}
                  />
                </div>
              </div>
            </Post1>
          </PostContainer>
        </div>
      </AppContainer>
    </>
  );
}

export default App;
