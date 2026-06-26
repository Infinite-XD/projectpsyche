import { useState } from 'react'
import './App.css'


function App() {

  return ( 
    <>
    <Quotes />
    </>
  )
}

function Quotes() {
  let quotes = [
    'Pressure creates diamonds.',
    'Nanakorobi yaoki.',
    'Discipline beats motivation every time.',
    'Pain is temporary, quitting stays forever.',
    'Small progress is still progress.',
    'You grow through what you go through.',
    'Champions keep going when others stop.',
    'The harder the battle, the sweeter the victory.',
    'Success is built on consistency.',
    'No storm lasts forever.',
    'Strength is forged in struggle.',
    'Keep moving, even if slowly.',
    'Persistence breaks resistance.',
    'Excuses build nothing.',
    'Focus on the next step, not the whole staircase.',
    'Every setback trains resilience.',
    'Endurance is power.',
    'Great things take brutal patience.',
    'Fear fades when action begins.',
    'Your future self is watching.',
    'You can rest, but do not quit.',
    'Survival itself is a form of strength.',
    'Hard roads create strong people.',
    'The obstacle is the path.',
    'Keep showing up.',
    'Resilience is built, not gifted.',
    'The grind shapes the outcome.',
    'Difficult does not mean impossible.',
    'Stay relentless.',
    'One more attempt can change everything.',
    'Winners outlast the pain.',
    'Progress demands persistence.',
    'Nothing worth having comes easy.',
    'You are stronger than your excuses.',
    'Momentum starts with one step.',
    'Discomfort is where growth lives.',
    'Push through the resistance.',
    'Perseverance turns dreams into reality.',
    'The comeback is always stronger.',
    'Strength grows in hard seasons.',
    'Refuse to stay defeated.',
    'Consistency compounds.',
    'Keep climbing.',
    'Resilient minds create resilient lives.',
    'Effort never betrays you.',
    'You did not come this far to stop.',
    'Pressure reveals character.',
    'Persistence outperforms talent.',
    'The struggle is part of the transformation.',
    'Courage is continuing despite fear.',
    'Every master was once terrible.',
    'Stay patient with the process.',
    'Grit changes everything.',
    'The strongest steel faces the hottest fire.',
    'Your limits are lying to you.',
    'Adapt and continue.',
    'Nothing can stop a determined mind.',
    'Keep fighting for your future.',
    'Success loves endurance.',
    'Temporary pain, permanent growth.',
    'You are built to endure.',
    'Keep your head down and work.',
    'Rise after every fall.',
    'Discipline creates freedom.',
    'Persistence is silent power.',
    'Keep going until it clicks.',
    'Struggle develops strength.',
    'Be tougher than your circumstances.',
    'Every day is another chance.',
    'Do not break under pressure.',
    'Consistency creates greatness.',
    'Victory belongs to the persistent.',
    'Endure the process.',
    'Strong minds survive hard times.',
    'Never let failure have the final word.',
    'Success is repetition done well.',
    'A river cuts rock through persistence.',
    'Stay hungry for improvement.',
    'The only way out is through.',
    'Hard times sharpen strong people.',
    'Discipline is remembering what you want.',
    'Your effort matters.',
    'Keep building, even unseen.',
    'Stay steady through the storm.',
    'Persistence creates momentum.',
    'Work in silence.',
    'Keep your standards high.',
    'Every challenge hides growth.',
    'Strength is earned daily.',
    'Do not stop halfway.',
    'Keep proving yourself right.',
    'You survive by continuing.',
    'The fire within must outlast the fire around you.',
    'Pressure either breaks you or builds you.',
    'Nothing changes without effort.',
    'Be relentless in pursuit.',
    'Resilience is refusing to stay down.',
    'Outwork your doubts.',
    'Trust the long process.',
    'Stay committed when motivation disappears.',
    'Hard work compounds quietly.',
    'Persistence creates opportunity.',
    'Even mountains erode slowly.',
    'Fight for the life you want.',
    'One disciplined day at a time.',
    'Stay durable.',
    'The strongest roots grow in darkness.',
    'Action defeats fear.',
    'Keep moving through uncertainty.',
    'A strong spirit survives storms.',
    'Never waste suffering.',
    'Your grind will speak eventually.',
    'Tough times reveal true strength.',
    'Every step counts.',
    'Stay resilient under pressure.',
    'Success rewards persistence.',
    'The mission continues.',
    'Greatness requires endurance.',
    'Refuse average effort.',
    'Every difficult day is training.',
    'Persistence is a quiet superpower.',
    'The process builds the person.',
    'Stay focused, stay steady.',
    'You are becoming stronger daily.',
    'Keep earning your future.',
    'Your scars are proof you survived.',
    'Do not fear slow growth.',
    'The climb is worth it.',
    'Keep chasing improvement.',
    'Strength begins with refusal to quit.',
    'You only fail when you stop.',
    'Hard work survives luck.',
    'Pressure creates evolution.',
    'Resilient people keep adapting.',
    'Stay disciplined through chaos.',
    'Every effort leaves a mark.',
    'Keep fighting the good fight.',
    'The grind never lies.',
    'Patience and persistence win.',
    'Nothing worthwhile is instant.',
    'Storms make stronger sailors.',
    'Hold the line.',
    'Stay dangerous to your doubts.',
    'Greatness demands resilience.',
    'Your persistence is your advantage.',
    'Keep carrying the weight.',
    'Rise with purpose.',
    'Endurance creates confidence.',
    'Stay unshaken.',
    'The work matters.',
    'Train your mind to continue.',
    'Keep your vision alive.',
    'The hardest paths build the strongest people.',
    'Never surrender your progress.',
    'A resilient heart cannot be defeated.',
    'The future belongs to the persistent.',
    'Turn pressure into power.',
    'Keep showing resilience.',
    'Growth often feels uncomfortable.',
    'Keep enduring.',
    'Stand firm through adversity.',
    'Persistence creates mastery.',
    'The battle shapes the warrior.',
    'Every sunrise is another opportunity.',
    'Your determination defines you.'
  ];
  return (
    <p><i>{quotes[Math.floor(Math.random() * quotes.length)]}</i></p>
  )
}

// function getTime() {
//   let today = new Date();
//   let hrs = 23 - today.getHours();
//   let mins = 59 - today.getMinutes();
//   let secs = 59 - today.getSeconds();

//   return [hrs, mins, secs]
// }

// function Countdown() {

// let today = new Date();
// const yyyy = today.getFullYear();
// let mm = today.getMonth();
// let dd = today.getDate();
// let p = document.querySelector('p')
// // let quotes = ['Time is an illusion, dont be fooled.', 'A man who cannot command himself will always be a slave.', 'The worst enemy you can meet will always be yourself.', 'Self-control is strength. Right thought is mastery. Calmness is power.', 'Rule your mind or it will rule you.', 'Not being able to govern events, I govern myself.', 'If you do not conquer self, you will be conquered by self.', 'The first and greatest victory is to conquer yourself.', 'We carry within us our greatest obstacle — and our greatest ally.']
// let quotes = ['Time is an illusion, dont be fooled.']
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// let formattedDate = months[mm] + " " + dd + ", " + yyyy
//   const dates = [
//     Date.parse("May 11, 2026") - Date.parse(formattedDate), 
//   ]
//   const milliseconds = 24 * 60 * 60 * 1000
//   let daystill = Math.floor(dates[0]/milliseconds)

  
//   return (
//     <>
//     <p>Time to econ: {daystill}</p>
//     <p><i>{quotes[Math.floor(Math.random() * quotes.length)]}</i> </p>
//     </>
//   )
  
// }

// setInterval(() => {
//   Countdown()
// }, 100000);

// function newsFetcher() {
//   // newsAPI
//   let url = 'https://newsapi.org/v2/top-headlines?' +
//             'q=apple&' +
//             'from=2025-10-16&' +
//             'sortBy=popularity&' +
//             'language=en&' +
//             'apiKey=49817c09f3ed4f95bd11e54f03ee4608';

//   let req = new Request(url);

//   fetch(req)
//       .then(function(response) {
//           console.log('fetched')
//           console.log(response.json());
//       })


//   // bbc
//   const RSS_BBC = "https://feeds.bbci.co.uk/news/business/economy/rss.xml"
//   fetch(RSS_BBC)
//   .then(response => response.text())
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//   .then(data => {
//     console.log(data);
//     const items = data.querySelectorAll("item");
//     let html = ``;
//     items.forEach(el => {
//       html += `
//         <article>
//           <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
//           <h2>
//             <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
//               ${el.querySelector("title").innerHTML}
//             </a>
//           </h2>
//         </article>
//       `;
//     });
//     document.body.insertAdjacentHTML("beforeend", html);
//   });





//   // BOE



//   // guardian




//   // google news





//   // oxylabs

// }

// newsFetcher()

// function newsParser() {
//   return 
// }

// function newsAnalyser() {

// }

// function MainFeed() {
  
//   return (
//     <>
    

//     </>
//   )
// }

// function Idk() {

// }




export default App
