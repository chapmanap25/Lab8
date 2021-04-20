$(document).ready(function() {
    $("form:first").on("submit", checkDay);
    $("form:last").on("submit", guessNumber);
});

function checkDay(event) {
    event.preventDefault();

    // Ask jQuery if the pancakes box is checked
    let checkMonday = $("input#monday").is(":checked");

    // Ask jQuery if the butter box is checked
    let checkTuesday = $("input#tuesday").is(":checked");

    // Ask jQuery if the syrup box is checked
    let checkWednesday = $("input#wednesday").is(":checked");

    let checkThursday = $("input#thursday").is(":checked");

    let checkFriday = $("input#friday").is(":checked");

    let checkSaturday = $("input#saturday").is(":checked");

    let checkSunday = $("input#sunday").is(":checked");

    // If I want pancakes, and I'm out of butter or out of syrup
    if(checkMonday === true)
    {
        // when test is true
        $("span#noParentheses").text("Work 9am-5pm");
    }
    else if(checkTuesday === true)
    {
        // when test is false
        $("span#noParentheses").text("School 8am-4pm");
    }
    else if(checkWednesday === true)
    {
        // when test is false
        $("span#noParentheses").text("Work 8am-4pm");
    }
    else if(checkThursday === true)
    {
        // when test is false
        $("span#noParentheses").text("School 9am-5pm");
    }
    else if(checkFriday === true)
    {
        // when test is false
        $("span#noParentheses").text("School 10am-2pm");
    }
    else if(checkSaturday === true)
    {
        // when test is false
        $("span#noParentheses").text("Brunch 8am");
    }
    else if(checkSunday === true)
    {
        // when test is false
        $("span#noParentheses").text("Nap 2pm");
    }}