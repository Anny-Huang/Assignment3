/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Initialize key variables
let costPerDay = 35;
let daysSelectedCount = 0;

// Create variables to represent the elements 
const dayElements = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const calculatedCostElement = document.getElementById("calculated-cost");
const clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Add click event listeners to each day element to handle the selection process
// Recalculate the total cost
dayElements.forEach(function(dayElement) {
  dayElement.addEventListener('click', function() {
    // Check if the day is already selected
    if (!dayElement.classList.contains('clicked')) {
      dayElement.classList.add('clicked');
      daysSelectedCount++; // Increase the counter 
    }
    updateCost();
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Add click event listeners to the clear button to reset selection and the total cost 
clearButton.addEventListener('click', function() {
    for (let dayElement of dayElements) {
      dayElement.classList.remove('clicked'); 
    }
    // Reset the counter 
    daysSelectedCount = 0; 
    updateCost(); 
  });

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Add click event listeners to the half day button and full day button to reset daily rate
// The selected rate is visually indicated by adding the "clicked" class
// Recalculate the total cost 
halfDayButton.addEventListener('click', function() {
    costPerDay = 20; 
    halfDayButton.classList.add('clicked');  
    fullDayButton.classList.remove('clicked'); 
    updateCost();  
  });

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function() {
    costPerDay = 35; 
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    updateCost(); 
  });

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// This function is responsible for calculating and updating the total cost.
function updateCost() {
    const totalCost = daysSelectedCount * costPerDay; // Calculate total cost based on the number of selected days
    calculatedCostElement.innerHTML = totalCost; // Update the cost display
  }
  
