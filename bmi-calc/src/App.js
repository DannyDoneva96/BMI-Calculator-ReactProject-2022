import { useState } from 'react'
import "./index.css"
function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let imgSrc = ''
  let reload = () => { window.location.reload() }


  let calculationBmi = (e) => {
    e.preventDefault()

    if (weight == 0 || height == 0) {
      alert('Please enter a valid weight and height!')

    } else {

      let bmi = (weight / (height * height))

      setBmi(bmi.toFixed(1))


      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are in perfect weight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are Overweight')
      } else if (bmi >= 30) {
        setMessage('Obesity! Go to the gym!')
      }
    }
  }




  return (
    <div className="app">
      <div className="container">
        <h1 className="main-heading">BMI Calculator</h1>
        <form className="form-calc" onSubmit={calculationBmi}>
          <div className="weight-div">
            <label className="wihgt-label">Weight (kg) </label>
            <input type="text" className="input-wight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="height-div">
            <label className="height-label">Height (m)</label>
            <input type="text" className="input-height" placeholder="Example: 180cm =1.8m" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="btn-div"><button className="btn" >Submit</button>
            <button className="btn" onClick={reload} >Reload</button>
          </div>

        </form>
        <div className="result"><h3>Your BMI is: {bmi}</h3>
          <p className="message">{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="photo" />
        </div>
      </div>
    </div>
  );
}

export default App;
