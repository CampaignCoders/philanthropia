/*

These are constants used in the backend app. Change these to meet your needs, and rename the file to constants.js

*/

const ServerConstants = {
    STRIPE_PK_TEST: "pk_test_oQMYBgX204myLQxGAaeawB55",
    STRIPE_SK_TEST: "sk_test_LeuWssYFJXCcXiKxmeEGTF1w",
    STRIPE_PK_PROD: "pk_test_oQMYBgX204myLQxGAaeawB55",
    STRIPE_SK_PROD: "sk_test_LeuWssYFJXCcXiKxmeEGTF1w",
    STRIPE_TEST_MODE: true, // Set this to false to stop using the Stripe testing environment
    PAYMENT_SERVER_URL: "http://localhost:3001"
};

module.exports = ServerConstants;
