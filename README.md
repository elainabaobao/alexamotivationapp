# Alexa Motivation Quote App
This app will give you themed quotes to motivate you. You can ask alexa for a themed quote whenever you want one. You can also ask her to send a text message with a quote.

## Sample Intents
Give me an Achievement Quote
Give me another Brave Quote
Tell me a Determination Quote
Tell me another Motivation Quote
Send achievement text
Send brave text
Send determination text
Send motivation text


## How to run / build

0. Go to src config.js and update your skill id.
1. Go create a twilio account
2. Go to src responses.js and update all twilio intents with your personal accountSID, authToken, To number, From number.
3. Update your quote themes and responses in fact.js
4. Create a alexa skill on developer.amazon.com
5. Create a aws lambda function and add the id to your alexa skill
5. npm install, npm run build
6. upload dist.zip to your lambda funtion

# alexa motivation app next iteration
Things that will included in motivation app 2.0
-set up time and day alexa will text you the motivation
-use firebase to store the time and day slot
-use cloudwatch events with another lambda function to run the text at specific time slow
