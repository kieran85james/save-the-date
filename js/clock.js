$(document).ready(function() {
  let clock;

  // Current time in London timezone
  let currentDate = moment.tz("Europe/London");

  // Target date in London timezone
  // let targetDate = moment.tz("2026-05-23 00:00", "Europe/London");
  let targetDate = moment.tz("2026-05-10 21:30", "Europe/London");

  // Difference in seconds
  let diff = targetDate.diff(currentDate, "seconds");

  if (diff <= 0) {

    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });

    console.log("Date has already passed!");

  } else {

    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {

        interval: function() {

          // Prevent negative countdown
          if (clock.getTime().time <= 0) {
            clock.setTime(0);
            clock.stop();
          }

        },

        stop: function() {
          console.log("Timer has ended!");
        }

      }
    });

  }
});
