
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.btn');
  const resultDiv = document.getElementById('result');
  const commentSpan = document.querySelector('.comment');

  btn.addEventListener('click', function (event) {
    event.preventDefault();

    let height = document.getElementById('height').value || 0;
    let weight = document.getElementById('weight').value || 0;

    if (height === '' || weight === '') {
      alert('Please insert the numbers!');
      return;
    }

    // BMI = weight in KG / height in meters squared
    height = height / 100;

    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);

    resultDiv.innerHTML = BMI;

    let status = '';

    if (BMI < 18.5) {
      status = 'Underweight';
    } else if (BMI >= 18.5 && BMI < 25) {
      status = 'Healthy';
    } else if (BMI >= 25 && BMI < 30) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }

    commentSpan.innerHTML = `Comment: You are <span id="comment">${status}</span>`;
  });
});

