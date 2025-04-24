//1.Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
function scheduleDelivery(days) {
    days.forEach(day => {
        switch (day) {
            case 'Monday':
                console.log(`Cash before delivery is on ${day}`)
                break;
            case 'Tuesday':
                console.log(`Payment after delivery is on ${day}`)
                break;
            case 'Friday':
                console.log(`Free delivery is on ${day}`)
                break;
            default:
                console.log(`No delivery on ${day}`)
        }
    })
}
scheduleDelivery(['Monday', 'Tuesday', 'Friday'])

//2.Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
function bookStatuses(books) {
    books.forEach(book => {
        if (book == 'available') {
            console.log('Ready to lend')
        } else {
            console.log('Checked out')
        }
    })
}
bookStatuses(['available', 'borrowed', 'available'])

//3.Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
function customerAges(ages) {
    ages.forEach(age => {
        if (age >= 18) {
            console.log('Adult')
        } else {
            console.log('Minor')
        }
    })
}
customerAges(['12', '20', '15', '18'])

//4.Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
function countDown() {
    let count = 5
    while (count <= 5 && count >= 0) {
        console.log(`You have ${count} lives left`)
        count--
    }

}
countDown()

//5.Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
function userFeedBack(feedbacks) {

    do {
        console.log(feedbacks.pop())
    } while (feedbacks.length > 0);
}
userFeedBack(['confusing', 'complex', 'easy', 'difficult', 'complicated'])

//6.Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
function loginStatuses(statuses) {
    statuses.forEach(status => {
        if (status == 'logged in') {
            console.log('Welcome back')
        } else {
            console.log('Please log in')
        }
    })
}
loginStatuses(['sign up', 'logged in', 'log in'])

//7.Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
function ticketPriorities(priorities) {
    priorities.forEach(priority => {
        switch (priority) {
            case 'low':
                console.log(`This message is ${priority} prioritised`)
                break;
            case 'medium':
                console.log(`This message is ${priority} prioritised`)
                break;
            case 'high':
                console.log(`This message is ${priority} prioritised`)
                break;
            default:
                console.log(`Unspecified ${priority} prioritised`)
        }
    })
}
ticketPriorities(['low', 'medium', 'high'])


//8.Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
function countDown() {
    let count = 10
    let i = 0
    while (count >= 0 && count <= 10) {
        console.log(`count is ${count}`);
        count--
    }
}
countDown();