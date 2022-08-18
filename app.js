// https://calculator.swiftutors.com/surface-area-of-an-ellipse-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaofEllipseRadio = document.getElementById('surfaceAreaofEllipseRadio');
const radiusofMajorAxisRadio = document.getElementById('radiusofMajorAxisRadio');
const radiusofMinorAxisRadio = document.getElementById('radiusofMinorAxisRadio');

let surfaceAreaofEllipse;
const PI = Math.PI;
let radiusofMajorAxis = v1;
let radiusofMinorAxis = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

surfaceAreaofEllipseRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Radius of Major Axis';
  variable2.textContent = '(b) Radius of Minor Axis';
  radiusofMajorAxis = v1;
  radiusofMinorAxis = v2;
  result.textContent = '';
});

radiusofMajorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Ellipse';
  variable2.textContent = '(b) Radius of Minor Axis';
  surfaceAreaofEllipse = v1;
  radiusofMinorAxis = v2;
  result.textContent = '';
});

radiusofMinorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Ellipse';
  variable2.textContent = '(a) Radius of Major Axis';
  surfaceAreaofEllipse = v1;
  radiusofMajorAxis = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaofEllipseRadio.checked)
    result.textContent = `Surface Area of Ellipse = ${computeSurfaceAreaofEllipse().toFixed(2)}`;

  else if(radiusofMajorAxisRadio.checked)
    result.textContent = `Radius of Major Axis = ${computeRadiusofMajorAxis().toFixed(2)}`;

  else if(radiusofMinorAxisRadio.checked)
    result.textContent = `Radius of Minor Axis = ${computeRadiusofMinorAxis().toFixed(2)}`;
})

// calculation

function computeSurfaceAreaofEllipse() {
  return PI * Number(radiusofMajorAxis.value) * Number(radiusofMinorAxis.value);
}

function computeRadiusofMajorAxis() {
  return Number(surfaceAreaofEllipse.value) / (Number(radiusofMinorAxis.value) * PI);
}

function computeRadiusofMinorAxis() {
  return Number(surfaceAreaofEllipse.value) / (Number(radiusofMajorAxis.value) * PI);
}