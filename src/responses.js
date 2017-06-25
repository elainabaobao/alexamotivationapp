const {themes} = require('./facts');
const {achievement, brave, determination, motivation} = themes;
const initSessionAttributes = () => {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};

    return sessionAttributes;
}
const {remindUser} = require('./firebasereminder');


const SendSMSAchievement = () => {
    // Twilio Credentials 
var accountSid = 'XXXXXXXXXXXXXXXXXX';
var authToken = 'XXXXXXXXXXXXXXXXXX';
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+xxxxxxxxxxx", 
    from: "+xxxxxxxxxxx", 
    //body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
    body: achievement[[(Math.floor(Math.random() * brave.length))]].factName,
}, function(err, message) { 
    console.log(message.sid); 
});
    const cardTitle = 'Text Sent';
    const speechOutput = 'I sent you an achievement quote.';
    const repromptText = 'Ask me to send more quotes';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}
const SendSMSBrave = () => {
    // Twilio Credentials 
var accountSid = 'XXXXXXXXXXXXXXXXXX';
var authToken = 'XXXXXXXXXXXXXXXXXX';
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+xxxxxxxxxxx", 
    from: "+xxxxxxxxxxx", 
    //body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
    body: brave[[(Math.floor(Math.random() * brave.length))]].factName,
}, function(err, message) { 
    console.log(message.sid); 
});
    const cardTitle = 'Text Sent';
    const speechOutput = 'I sent you a brave quote.';
    const repromptText = 'Ask me to send more quotes';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}
const SendSMSDetermination = () => {
    // Twilio Credentials 
var accountSid = 'XXXXXXXXXXXXXXXXXX';
var authToken = 'XXXXXXXXXXXXXXXXXX';
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+xxxxxxxxxxx", 
    from: "+xxxxxxxxxxx", 
    //body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
     body: determination[[(Math.floor(Math.random() * brave.length))]].factName,
}, function(err, message) { 
    console.log(message.sid); 
});
    const cardTitle = 'Text Sent';
    const speechOutput = 'I sent you a determination quote.';
    const repromptText = 'Ask me to send more quotes';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}
const SendSMSMotivation = () => {
    // Twilio Credentials 
var accountSid = 'XXXXXXXXXXXXXXXXXX';
var authToken = 'XXXXXXXXXXXXXXXXXX';
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+xxxxxxxxxxx", 
    from: "+xxxxxxxxxxx", 
    //body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
    body: motivation[[(Math.floor(Math.random() * brave.length))]].factName,
}, function(err, message) { 
    console.log(message.sid); 
});
    const cardTitle = 'Text Sent';
    const speechOutput = 'I sent you a motivation quote.';
    const repromptText = 'Ask me to send more quotes';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}

const getNewAchievementIntent = () => {
    console.log(themes)
    const cardTitle = 'Fact';
    const speechOutput = 'Here is a achievement quote: ' + achievement[(Math.floor(Math.random() * achievement.length))].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me for another achievement quote';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}


const getNewBraveIntent = () => {
    console.log(themes)
    const cardTitle = 'Fact';
    const speechOutput = 'Here is a brave quote: ' + brave[[(Math.floor(Math.random() * brave.length))]].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me for another brave quote';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}

const getNewDeterminationIntent = () => {
    console.log(themes)
    const cardTitle = 'Fact';
    const speechOutput = 'Here is a determination quote: ' + determination[[(Math.floor(Math.random() * determination.length))]].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me for another determination quote';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}
const getNewMotivationIntent = () => {
    console.log(themes)
    const cardTitle = 'Fact';
    const speechOutput = 'Here is a motivation quote: ' + motivation[[(Math.floor(Math.random() * motivation.length))]].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me for another motivation quote';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}


const getWelcomeResponse = () => {
    const cardTitle = 'Welcome';
    const speechOutput = 'Welcome to Alexa Motive me! Ask for a quote or get a text message quote. ';
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me to give a themed quote';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);
}
const getEndResponse = () => {
    const cardTitle = 'Conversation completed.';
    const speechOutput = 'Thanks for using Alexa motivate me';
    const shouldEndSession = true;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            null,
            shouldEndSession
        ]);
}

const AddEvent = () => {
    const cardTitle = 'Event Added';
    const speechOutput = 'Your event is added';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            null,
            shouldEndSession
        ]);
}
const RemindSMS = (intentRequest, session) => {   
    const timeSlot = intentRequest.intent.slots.time.value;
    remindUser(timeSlot);

    return Promise.resolve().then(_ => {
        console.log(intentRequest.intent.slots)
        const cardTitle = 'Reminder Set';
        const speechOutput = 'Ok, I\'ve set a reminder to text you a motivational quote at your requested time';
        const shouldEndSession = true;

        return [
            cardTitle,
            speechOutput,
            null,
            shouldEndSession
        ]
    })
}

const intentRequest = (intentRequest, session) => {
    const {intent} = intentRequest;
    const {name: intentName} = intent;

    console.log('intentRequest', intentRequest, intentName)

    switch (intentName) {
        case 'GetNewAchievementIntent':
            return getNewAchievementIntent();
        case 'GetNewBraveIntent':
            return getNewBraveIntent();
        case 'GetNewDeterminationIntent':
            return getNewDeterminationIntent();
        case 'GetNewMotivationIntent':
            return getNewMotivationIntent();
        case 'SendSMSAchievement':
            return SendSMSAchievement();
        case 'SendSMSBrave':
            return SendSMSBrave();
        case 'SendSMSDetermination':
            return SendSMSDetermination();
        case 'SendSMSMotivation':
            return SendSMSMotivation();
        case 'RemindSMS':
            return RemindSMS(intentRequest, session);
        case 'AMAZON.StopIntent':
        case 'AMAZON.CancelIntent':
            return getEndResponse();
        default:
            return getWelcomeResponse();
    }
}

module.exports = {
    getWelcomeResponse,
    intentRequest,
    initSessionAttributes,
}
