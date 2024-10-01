# BMI calculator --
### javaScript solution  chai aur code ....

``` javaScript
const form = document.querySelector('form')

form.addEventListener('submit', function (e){
   e.preventDefault();

  const height= parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');
  const weight_guide = document.querySelector("#weight-guide");
   
  if(height==='' || height <0 ||  isNaN(height)) {
    results.innerHTML= `Plaease enter the valid height ${height}`;
  }
  else if (weight === '' || weight <0 || isNaN(weight)) {
    results.innerHTML= `Please enter the valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML=`<span>The BMI number is : ${bmi}</span>`;

    if(bmi <18.6){
      weight_guide.innerHTML = "Under Weight";
    }
    else if(bmi>18.6 && bmi<24.9){
      weight_guide.innerHTML = "Normal Range";
    }
    else if(bmi>24.9) {
      weight_guide.innerHTML = "Overweight";
    }
    else{
      console.log("there is a error in the input");
    }
  }
})
 
```