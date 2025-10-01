import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return ( 
    <>
    <Countdown />
    </>
  )
}

function getTime() {
  let today = new Date();
  let hrs = 23 - today.getHours();
  let mins = 59 - today.getMinutes();
  let secs = 59 - today.getSeconds();

  return [hrs, mins, secs]
}

function Countdown() {

let today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth();
let dd = today.getDate();
let p = document.querySelector('p')

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let formattedDate = months[mm] + " " + dd + ", " + yyyy
  const dates = [
    Date.parse("May 11, 2026") - Date.parse(formattedDate), 
  ]
  const milliseconds = 24 * 60 * 60 * 1000
  let daystill = Math.floor(dates[0]/milliseconds)

let times = getTime()

setInterval(() => {
  p.innerHTML = 'Time to econ: {daystill} {times[0]} {times[1]} {times[2]}';
}, 1000);
  
  return (
    <>
    <p>Time to econ: {daystill}</p>
    </>
  )
  
}

export default App
