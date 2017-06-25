const firebase = require('firebase');

const PHONENUMBER = '+16073728921'

const remindUser = (timeslot) => {
    const config = {
      apiKey: "AIzaSyCtE-g4deha3wTZe2fH1swbxMqe9mSErjk",
      authDomain: "alexa-69998.firebaseapp.com",
      databaseURL: "https://alexa-69998.firebaseio.com",
      storageBucket: "alexa-69998.appspot.com",
    };
    const app = firebase.initializeApp(config);
    const database = firebase.database();
    //return Promise.resolve()
    return database.ref().child(timeslot).child(PHONENUMBER).set({
        type: 'brave',
    }).then(_ => app.delete()); // thanks to: https://stackoverflow.com/a/41784210

}

module.exports = {
    remindUser,
}

// function remindUser(intent, session, callback) {
//     var cardTitle = intent.name;
//     var reminder = brave[[(Math.floor(Math.random() * brave.length))]].factName;
//     var time = request.slot('TIME');
//     var date = intent.slots.Date.value;
//     var repeatDay = intent.slots.RepeatDay.value;

//     sessionAttributes = createReminderAttributes(reminder, time);

//     if (reminder && time) {
//          console.log("time");
//         speechOutput = "You will be reminded to " + reminder + " at " + time;
//         addReminderToFirebase(reminder, time, function () {
//         repromptText = "Ask to be texted or say Alexa, quit.";
    
//             callback(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
//         });
//     }  else {
//         speechOutput = "You must specify a reminder with a time.";
//         callback(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
//     }
// }

// function createReminderAttributes(task, time) {
//     return {
//         task: task,
//         time: time,
//     };
// }

// function addReminderToFirebase(reminder, time, callback) {
//     var ref = new Firebase("https://alexa-69998.firebaseio.com"), pushRef = ref.push();

//     pushRef.set({
//         task: reminder,
//         time: time
//     }, function (err) {
//         if (err) {
//             console.log("Firebase error: " + err);
//         } else {
//             console.log("Done!");
//             callback();
//         }
//     });
// }
