import styled from 'styled-components'; 

export const DarkPortfoli = styled.div`


div {
    height: 45vh;
}

h1 {
    font-family: "Gilroy"
    color: #fafafa;
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
  font-family: "Montserrat";
  align-items: center;
  height: 40vh;
  opacity: 0.8;
  width: 100%;
  bottom: 1px;
  background-color: #0F0F0F;
  color: white;
}

@media only screen and (max-width: 320px) {
    .container-height {
    height: 200vh;
    }

    h1 {
        font-size: 20px;
        font-family: "Gilroy";
        color: #fafafa;
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
        font-family: "Gilroy";
        color: #fafafa;
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
        font-family: "Gilroy";
        color: #fafafa;
    }
}

@media only screen and (min-width: 1200px) {
    .container-height {
    height: 100vh;
}

h1 {
        font-size: 40px;
        font-family: "Gilroy";
        color: #fafafa;
    }
}


`