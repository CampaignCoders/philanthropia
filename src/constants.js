/*

These are constants used in the frontend app. Change these to meet your needs, and rename the file to constants.js

*/

import heroimage from "./page/coder.jpg";

const AppConstants = {
    STRIPE_PK_TEST: "pk_test_oQMYBgX204myLQxGAaeawB55",
    STRIPE_PK_PROD: "pk_test_oQMYBgX204myLQxGAaeawB55",
    STRIPE_TEST_MODE: true, // Set this to false to stop using the Stripe testing environment
    PAYMENT_SERVER_URL: "http://localhost:3001",
    HERO_TITLE: "Help this coder!",
    HERO_IMAGE: heroimage,
    HOME_STORY: `He needs your donations.


    `,
    FOOTER_BENEFICIARY: "Primary beneficiary: ",
    FOOTER_ORGANIZATION: "blah blah, LLC",
    FOOTER_ORGANIZATION_SUBHEADING: "non-profit"
};

export default AppConstants;
