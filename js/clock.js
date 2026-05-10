$(document).ready(function() {

  // Target date (local browser time)
  let targetDate = new Date("2026-05-23T00:00:00");

  // Current date
  let currentDate = new Date();

  // Difference in seconds
  let diff = Math.floor((targetDate - currentDate) / 1000);

  // Prevent negatives
  diff = Math.max(diff, 0);

  // Create clock
  let clock = $(".clock").FlipClock(diff, {
    clockFace: "DailyCounter",
    countdown: true,
    callbacks: {
      stop: function() {
        clock.setTime(0);
        console.log("Timer has ended!");
      }
    }
  });

});
