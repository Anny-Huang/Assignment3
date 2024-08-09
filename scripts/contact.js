// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Create variables for the submit button and the contact page container
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function() {
  // Create a new <p> element and set its text content
  const thankYouMessage = document.createElement('p');
  thankYouMessage.innerText = 'Thank you for your message!';

  // Set the font size and center the text
  thankYouMessage.style.fontSize = '24px';
  thankYouMessage.style.textAlign = 'center'; 

  // Clear the current contents of the contact page
  contactPage.innerHTML = '';

  // Append the thank you message to the contact page
  contactPage.appendChild(thankYouMessage);
});