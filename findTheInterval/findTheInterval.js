function DayCount(currentDateString, eventDateString) {
    // Set the unit values in milliseconds.
    let msecPerMinute = 1000 * 60;
    let msecPerHour = msecPerMinute * 60;
    let msecPerDay = msecPerHour * 24;
  
    // Set a date and get the milliseconds
    let currentDate = new Date(currentDateString); // startDate.setMonth(8);startDate.setDate(8);startDate.setHours(0, 0, 0, 0);
    let eventDate = new Date(eventDateString);
    let currentDateMsec = currentDate.getTime();
    let eventDateMsec = eventDate.getTime();
  
    // Get the difference in milliseconds.
    let interval = eventDateMsec - currentDateMsec;
  
    // many days from the interval to determine the remainder.
    let days = Math.floor(interval / msecPerDay);
    let reminder = interval - (days * msecPerDay);
  
    //Output: xx days
    //the positive number refers to day left
    //the negative number refers day since
    return days;
  }
  
  let days = DayCount('9/7/2024', '8/7/2024');
  
  document.getElementById("interval1").innerHTML = days;

  let events = [];
  events.push(days);

  /* ==========================================================================
    Student's code here
   ========================================================================== */

  let table = document.getElementById("schedule");
  let rows = table.querySelectorAll("tr");

  for (let i = 2; i < rows.length; i++) {
    let dateCell = rows[i].querySelector("td:nth-child(2)"); 
    let dateValue = dateCell.textContent;
    let intervalCell = rows[i].querySelector("td:nth-child(3)"); 

    /* if need to use current time: 
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toLocaleDateString();
    */

    let interval = DayCount('9/7/2024',dateValue);

    intervalCell.innerHTML = interval;
  }
