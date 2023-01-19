import * as React from "react"
import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import { jsx, css } from '@emotion/react'
import "react-datepicker/dist/react-datepicker.css";
import { navigate } from "gatsby"


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  textAlign: "center",
  marginTop: 0,
  marginBottom: 30,
}

const formStyle = css`
  width:100%;
`

const labelStyle = css`
  padding-right:10px;
`

const labelBlock = css`
  margin-bottom:15px;
  display:block;
`

const inputTextStyle = css`
  width:100%;
`

const submitStyle = css`
  text-align:center;

  input {
    font-size:1.8em;
    background-color:#F4D03F;
  }
`
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('/');
}

// markup
const IndexPage = () => {
  const inicialNac = new Date(Date.parse("01/01/1990"));
  const nombre = React.createRef();
  const apellido = React.createRef();
  const dni = React.createRef();
  const [nacimiento, setNacimiento] = useState(inicialNac);
  const donde = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    const nacOut = formatDate(nacimiento);
    console.log(nacOut);
    navigate(`/pase?nombre=${nombre.current.value}&apellido=${apellido.current.value}&dni=${dni.current.value}&nacimiento=${nacOut}&donde=${donde.current.value}`)
  }

  return (
    <main style={pageStyles}>
      <title>Pase Barranitario</title>
      <h1 style={headingStyles}>
        Pase Barranitario
      </h1>
      <p>Por favor ingrese sus datos para generar su pase 100% barrani</p>

      <form css={formStyle} onSubmit={handleSubmit}>
        <label css={labelBlock}>
          <span css={labelStyle}>Nombre:</span>
          <input
            css={inputTextStyle}
            defaultValue=""
            type="text"
            ref={nombre} />
        </label>
        <label css={labelBlock}>
          <span css={labelStyle}>Apellido:</span>
          <input
            css={inputTextStyle}
            defaultValue=""
            type="text"
            ref={apellido} />
        </label>
        <label css={labelBlock}>
          <span css={labelStyle}>DNI:</span>
          <input
            css={inputTextStyle}
            defaultValue=""
            type="text"
            ref={dni} />
        </label>
        <label css={labelBlock}>
          <span css={labelStyle}>Fecha de nacimiento:</span>
          <DatePicker selected={nacimiento} onChange={(date) => setNacimiento(date)} dateFormat="dd/MM/yyyy" showYearDropdown={true} />
        </label>
        <label css={labelBlock}>
          <span css={labelStyle}>Donde fue aplicada la vacuna:</span>
          <textarea
            css={inputTextStyle}
            defaultValue="UNIDADES SANITARIAS MOVILES, VACUNACION Y TESTEO (USAM) - BARRACAS - COMUNA 4 - CABA"
            type="text"
            ref={donde} />
        </label>
        <div  css={submitStyle}>
        <input type="submit" value="Generar mi pase" />
        </div>
      </form>
    </main>
  )
}

export default IndexPage
