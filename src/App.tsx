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
  height: auto;
  overflow-x: hidden;
  background: lightgray;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const PostContainer = styled.div`
  display: flex;
  width: 60vw;
  height: auto;
  border: 1px solid gray;
  align-items: flex-start;
  margin-top: 29px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* width: 1rem; */
    margin-left: -120px;
  }
`;

const Post1 = styled.div`
  display: flex;
  width: 28rem;
  height: auto;
  /* border: 1px solid gray; */
  align-items: flex-start;
  background: white;
  padding: 37px;
  padding-bottom: 24px;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 123%;
  }
`;

const Img1 = styled.img`
  height: 360.5px;
  width: 50%;
  /* width: 516px; */

  @media screen and (max-width: 550px) {
    height: 250px;
    width: 156%;
    /* margin-left: 10px; */
  }

  @media screen and (min-width: 550px) and (max-width: 800px) {
    height: 250px;
    width: 142%;
    /* margin-left: 10px; */
  }
`;

const ViewsContainer = styled.div`
  display: flex;
  width: 60vw;
  /* height: auto; */
  /* align-items: flex-start; */
  margin-top: 13px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* width: 1rem; */
    /* margin-left: -120px; */
    justify-content: center;
  }
`;

const Coments = styled.span`
  display: flex;
  /* width: 60vw; */
  /* height: auto; */
  /* align-items: flex-start; */
  margin-left: 12px;

  @media screen and (max-width: 800px) {
    margin-left: 0px;
    margin-top: 6px;
  }
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
            <Img1 src={paos} alt="paos" />

            <Post1>
              <div style={{ display: "flex" }}>
                <RxAvatar
                  style={{
                    fontSize: "35px",
                    marginTop: "-1px",
                    color: "darkblue",
                    paddingBottom: "16px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "13px",
                    marginLeft: "6px",
                    marginTop: "0px",
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
                  marginTop: "50px",
                  fontSize: "14px",
                }}
              >
                <ViewsContainer>
                  <span>0 visualização</span>
                  <Coments> 0 comentário</Coments>
                </ViewsContainer>
                <div
                  style={{
                    display: "flex",
                    width: "55%",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginTop: "12px",
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
