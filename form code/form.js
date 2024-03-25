function populateRelatedContent() {
  const dropdown = document.getElementById('dropdown');
  const selectedOption = dropdown.value;
  
  // Object mapping each option value to a corresponding URL
  const formPages = {
      'option1': '../form code/lane_reservation.html', // URL for Lane Reservations
      'option2': '../form code/birthday.html',   // URL for Birthday Parties
      'option3': '../form code/parties_events.html',   // URL for Birthday Parties
      'option4': '../form code/kidscamps.html',   // URL for Birthday Parties
      'option5': '../form code/buyout.html',   // URL for Birthday Parties
      // Add more mappings as needed
  };
  
  // Redirect to the selected form's page
  if (formPages[selectedOption]) {
      window.location.href = formPages[selectedOption];
  }
}
