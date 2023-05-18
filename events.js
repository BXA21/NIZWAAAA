// Function to calculate and display the countdown timer
function countdownTimer(timerId, targetDate) {
    const timer = document.getElementById(timerId);
  
    function updateTimer() {
      const currentTime = new Date().getTime();
      const timeLeft = targetDate - currentTime;
  
      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        timer.innerHTML = "Event has started!";
      }
    }
  
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  
  // Set the target date for each event
  const targetDate1 = new Date("2023-06-01T09:00:00Z").getTime();
  const targetDate2 = new Date("2023-06-10T18:30:00Z").getTime();
  const targetDate3 = new Date("2023-06-20T14:00:00Z").getTime();
  const targetDate4 = new Date("2023-07-01T12:00:00Z").getTime();
  
  // Call the countdownTimer function for each event
  countdownTimer("timer1", targetDate1);
  countdownTimer("timer2", targetDate2);
  countdownTimer("timer3", targetDate3);
  countdownTimer("timer4", targetDate4);



  // Function to handle the click event on an event card
function handleEventCardClick(event) {
    event.currentTarget.classList.toggle('selected');
  }
  
  // Get all event cards
  const eventCards = document.querySelectorAll('.event');
  
  // Add event listener to each event card
  eventCards.forEach((card) => {
    card.addEventListener('click', handleEventCardClick);
  });