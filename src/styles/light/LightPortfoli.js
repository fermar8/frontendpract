import styled from 'styled-components'; 

export const LightPortfoli = styled.div`


div {
    height: 45vh;
}

h1 {
    font-family: "Gilroy"
}

.hover-container {
    position: relative;
    height: 40vh;
    width: 100%;
}

.image-portfoli-hover {
    width: 100%;
    height: 40vh;
}

.image-portfoli {
    height: 40vh;
    width: 100%;
}

.text-block {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  opacity: 0.8;
  width: 100%;
  bottom: 1px;
  background-color: black;
  color: white;
}

@media only screen and (max-width: 320px) {
    .container-height {
    height: 200vh;
    }

    h1 {
        font-size: 20px;
    }

    .proyectos-title {
        text-align: center;
    }
    
}

@media only screen and (min-width: 320px) and (max-width: 768px) {

    .container-height {
    height: 200vh;
}

h1 {
        font-size: 20px;
    }

    .proyectos-title {
        text-align: center;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
    .container-height {
    height: 100vh;
}

h1 {
        font-size: 30px;
    }
}

@media only screen and (min-width: 1200px) {
    .container-height {
    height: 100vh;
}

h1 {
        font-size: 40px;
    }
}


`