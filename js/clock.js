$(document).ready(function() {

  // Current time in London timezone
  let currentDate = moment.tz("Europe/London");

  // Target date in London timezone
  let targetDate = moment.tz("2026-05-23 00:00", "Europe/London");

  // Difference in seconds
  let diff = targetDate.diff(currentDate, "seconds");

  // Prevent negative starting values
  diff = Math.max(diff, 0);

  // Create clock
  let clock = $(".clock").FlipClock(diff, {
    clockFace: "DailyCounter",
    countdown: true,
    callbacks: {

      stop: function() {

        // Force display to remain at 0
        clock.setTime(0);

        console.log("Timer has ended!");

      }

    }
  });

});
