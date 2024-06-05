// import './App.css'
import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar'
import topo from './assets/comida-topo.png'

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: lightgray;
  justify-content: center;
  flex-direction: column;
  align-items: center;



`



function App() {


  return (
    <>
      <AppContainer>
          <NavBar />
          <div>
            <img src={topo} alt="topo comida"/>
          </div>

      
      </AppContainer>
     
    </>
  )
}

export default App
