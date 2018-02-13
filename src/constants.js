/*

These are constants used in the frontend app. Change these to meet your needs, and rename the file to constants.js

*/

import heroimage from "./page/coder.jpg";

const AppConstants = {
    STRIPE_PK_TEST: "pk_test_oQMYBgX204myLQxGAaeawB55",
    STRIPE_PK_PROD: "pk_test_oQMYBgX204myLQxGAaeawB55",
    STRIPE_TEST_MODE: true, // Set this to false to stop using the Stripe testing environment
    PAYMENT_SERVER_URL: "http://localhost:3001",
    HERO_TITLE: "Help this coder move past this bug by donating some money !",
    HERO_IMAGE: heroimage,
    HOME_STORY: `Use this text area to tell your story and make your pitch for donations.


    `,
    FOOTER_BENEFICIARY: "Primary beneficiary: chicago coders",
    FOOTER_ORGANIZATION: "Chicago Coding Fund",
    FOOTER_ORGANIZATION_SUBHEADING: "BLAH BLAH BLAH"
};

export default AppConstants;
