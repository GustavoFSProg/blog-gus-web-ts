import {
  PostContainer,
  Post1,
  Img1,
  ViewsContainer,
  Coments,
} from "./style-postcard";
import paos from "../../assets/paos.png";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";

function PostCard() {
  return (
    <>
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
                marginLeft: "8px",
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
              Crie um subtítulo para o post no blog que resume numa frase curta
              e atraente o seu post. Assim seus leitores vão querer continuar a
              ler....
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
    </>
  );
}

export default PostCard;
