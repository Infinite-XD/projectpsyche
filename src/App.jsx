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

  
  return (
    <>
    <p>Time to econ: {daystill}</p>
    <p><i>Time is an illusion, dont be fooled.</i> </p>
    </>
  )
  
}

setInterval(() => {
  Countdown()
}, 100000);

function newsFetcher() {
  // main sources can be: theguardian, bbc, 
  // extras: imf, cepr? 
  var url = 'https://newsapi.org/v2/everything?' +
            'q=bitcoin' +
            'from=2024-10-11&' +
            'sortBy=popularity&' +
            'apiKey=49817c09f3ed4f95bd11e54f03ee4608';

  var req = new Request(url);

  fetch(req)
      .then(function(response) {
          console.log(response.json());
      })

}

newsFetcher()

function newsParser() {
  return 
}

function newsAnalyser() {

}

function MainFeed() {
  
  return (
    <>
    

    </>
  )
}






export default App
