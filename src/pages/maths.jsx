import Dropdown from "../components/dropdown";





function TopicSelector() {

  let topics = []
    













}


















function Countdown() {

let today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth();
let dd = today.getDate();
let p = document.querySelector('p')
// let quotes = ['Time is an illusion, dont be fooled.', 'A man who cannot command himself will always be a slave.', 'The worst enemy you can meet will always be yourself.', 'Self-control is strength. Right thought is mastery. Calmness is power.', 'Rule your mind or it will rule you.', 'Not being able to govern events, I govern myself.', 'If you do not conquer self, you will be conquered by self.', 'The first and greatest victory is to conquer yourself.', 'We carry within us our greatest obstacle — and our greatest ally.']
let quotes = ['Time is an illusion, dont be fooled.']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let formattedDate = months[mm] + " " + dd + ", " + yyyy
  const dates = [
    Date.parse("June 03, 2026") - Date.parse(formattedDate), 
  ]
  const milliseconds = 24 * 60 * 60 * 1000
  let daystill = Math.floor(dates[0]/milliseconds)

  
  return (
    <>
    <p>Time to maths: {daystill}</p>
    </>
  )
  
}

setInterval(() => {
  Countdown()
}, 100000);





export default function Page2() {
  return (
    <>
      <Dropdown />
      <Countdown />
      <p></p>
    </>
  );
}
