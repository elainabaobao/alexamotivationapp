const {themes} = require('./facts');
const {achievement, brave, determination, motivation} = themes;
const initSessionAttributes = () => {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};

    return sessionAttributes;
}

// const getFactResponse = () => {
//     console.log(themes)
//     const cardTitle = 'Fact';
//     const speechOutput = 'Here is a fact: ' + physics[0].factName;
//     // If the user either does not reply to the welcome message or says something that is not
//     // understood, they will be prompted again with this text.
//     const repromptText = 'Ask me about x y and z ';
//     const shouldEndSession = false;

//     return Promise.resolve()
//         .then(_ => [
//             cardTitle,
//             speechOutput,
//             repromptText,
//             shouldEndSession
//         ]);   
// }
//
const getNewAchievementIntent = () => {
    console.log(themes)
    const cardTitle = 'Fact';
    const speechOutput = 'Here is a fact: ' + achievement[(Math.floor(Math.random() * achievement.length))].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me about x y and z ';
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
    const speechOutput = 'Here is a fact: ' + brave[[(Math.floor(Math.random() * brave.length))]].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me about x y and z ';
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
    const speechOutput = 'Here is a fact: ' + determination[[(Math.floor(Math.random() * determination.length))]].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me about x y and z ';
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
    const speechOutput = 'Here is a fact: ' + motivation[[(Math.floor(Math.random() * motivation.length))]].factName;
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me about x y and z ';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);   
}
// GetNewFactIntent': function () {
//         var factArr = data;
//         var factIndex = Math.floor(Math.random() * factArr.length);
//         var randomFact = factArr[factIndex];
//         var speechOutput = GET_FACT_MESSAGE + randomFact;
//         this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
//     },



const getWelcomeResponse = () => {
    const cardTitle = 'Welcome';
    const speechOutput = 'Welcome to Alexa Bot. ';
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me about x y and z ';
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
    const speechOutput = 'Thanks for using Alexa Bot';
    const shouldEndSession = true;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            null,
            shouldEndSession
        ]);
}

const intentRequest = (intentRequest, session) => {
    const {intent} = intentRequest;
    const {name: intentName} = intent;

    console.log(intentName)
    switch (intentName) {
        case 'GetNewFactIntent':
            return getFactResponse();
        case 'GetNewAchievementIntent':
            return getNewAchievementIntent();
        case 'GetNewBraveIntent':
            return getNewBraveIntent();
        case 'GetNewDeterminationIntent':
            return getNewDeterminationIntent();
        case 'GetNewMotivationIntent':
            return getNewMotivationIntent();
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
