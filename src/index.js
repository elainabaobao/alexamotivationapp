const {config} = require('./config')
const {buildSpeechletResponse} = require('./utils')
const {
    getWelcomeResponse,
    intentRequest,
} = require('./responses');

const init = (event, context, callback) => {
    console.log('event', event)
    const {request, session} = event;
    const {type} = request;
    console.log('type', type)
    let response = [];
    try {
        switch(type) {
            case 'LaunchRequest':
                response = getWelcomeResponse();
                break;
            case 'IntentRequest':
                console.log('IN intentRequest')
                response = intentRequest(request, session);
                console.log('OUT intentRequest')
                break;
            default:
                response = getWelcomeResponse();
        }

        response.then(speechletParams => {
            console.log('IN callback', buildSpeechletResponse(...speechletParams))
            callback(null, {
                version: '1.0',
                sessionAttributes: {},
                response: buildSpeechletResponse(...speechletParams),
            })
        });
    }
    catch(e) {
        callback(err);
    }
};

module.exports = {
    init,
};
