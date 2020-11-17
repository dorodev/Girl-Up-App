const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
	apiKey: 'b5bb4c5377e395698cad78473fc9e14bef92a58d906c7b9d580819ed5f5ee7d7', 
	username: 'Dorothy'
});



module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
        const result=await africastalking.SMS.send({
            to: ' [30261]',
            message: 'Hey Girls...',
            from: '[+254721756109]'
        });
        console.log(result);
    } catch(ex) {
        console.error(ex);
    } 
 
};