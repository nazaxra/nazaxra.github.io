import * as React from "react"
import { jsx, css } from '@emotion/react'


import paseImg from "../images/pase.png"
import paseVacunaImg from "../images/pase-vacuna.png"
import { useQueryParam, StringParam } from "use-query-params";


// styles
const pageStyles = css`
  color: #232129;
  font-family: "-apple-system, Roboto, sans-serif, serif";
`

const pase = css`
    background-image: url("${paseImg}");
    width: 950px;
    height: 611px;
    background-size: contain;
    background-repeat: no-repeat;
    margin:auto;
`

const vacuna = css`
    background-image: url("${paseVacunaImg}");
    width: 950px;
    height: 611px;
    background-size: contain;
    background-repeat: no-repeat;
    margin:auto;
`

const texto = css`
    font-family: 'Open Sans', sans-serif;
    font-size:30px;
    position:relative;
    letter-spacing: -2px;
`

const nombrePos = css`
    top: 230px;
    left: 510px;
    text-transform: uppercase;
    width:420px;
    line-height: 0.9;
`

const dniPos = css`
    top: 270px;
    left: 510px;
`

const nacPos = css`
    top: 300px;
    left: 510px;
`
  
const vacPos = css`
    top: 150px;
    left: 510px;
`
const lotePos = css`
    top: 205px;
    left: 510px;
`

const fechaPos = css`
    top: 290px;
    left: 730px;
`

const dosisPos = css`
    top: 120px;
    left: 730px;
`

const dondePos = css`
    top: 210px;
    left: 255px;
    width: 450px;
    text-transform: uppercase;
`

const titulo = css`
    text-align:center;
    font-weight: normal;
    font-family: sans-serif;
    font-size:2.5em;
`

const subtitulo = css`
    text-align:center;
    font-weight: bold;
    color:#444444;
    font-family: sans-serif;
    font-size:1.8em;
`


// markup
const PasePage = () => {
    const [nombre, setNombre] = useQueryParam("nombre", StringParam);
    const [apellido, setApellido] = useQueryParam("apellido", StringParam);
    const [dni, setDni] = useQueryParam("dni", StringParam);
    const [nacimiento, setNacimiento] = useQueryParam("nacimiento", StringParam);
    const [donde, setdonde] = useQueryParam("donde", StringParam);

    var today = new Date();
    const date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    

  return (
    <main css={pageStyles}>
      <title>MiArgentina</title>
      <h1 css={titulo}><b>Vacunación Covid-19</b>/Covid-19 vaccination</h1>
      <h1 css={subtitulo}>Fecha/date: {date}</h1>
      <div css={pase}>
            <div css={[nombrePos, texto]}>{apellido}, {nombre}</div>
            <div css={[dniPos, texto]}>{dni}</div>
            <div css={[nacPos, texto]}>{nacimiento}</div>
      </div>

      <div css={vacuna}>
            <div css={[vacPos, texto]}>Sinopharm Vacuna SARSCOV 2</div>
            <div css={[lotePos, texto]}>202108B1249</div>
            <div css={[fechaPos, texto]}>13/09/2021</div>
            <div css={[dosisPos, texto]}>Primera</div>
            <div css={[dondePos, texto]}>{donde}</div>
      </div>

    <div css={vacuna}>
        <div css={[vacPos, texto]}>Sinopharm Vacuna SARSCOV 2</div>
        <div css={[lotePos, texto]}>202109B1358</div>
        <div css={[fechaPos, texto]}>21/10/2021</div>
        <div css={[dosisPos, texto]}>Segunda</div>
        <div css={[dondePos, texto]}>{donde}</div>
    </div>


    </main>
  )
}

export default PasePage
