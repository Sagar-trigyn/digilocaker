
const common = require("oci-common");
const identity = require("oci-identity");

// TODO: Fill in appropriate values for tenancy (str) / fingerprint (str) / passphrase(optional) (str | null) / privateKey (str) / region (common.Region)
const tenancy = "";
const user = "";
const fingerprint = "";
const passphrase = null; // optional parameter
const privateKey = ``;
const region = common.Region.US_PHOENIX_1; // Change to appropriate region

const provider = new common.SimpleAuthenticationDetailsProvider(
    tenancy,
    user,
    fingerprint,
    privateKey,
    passphrase,
    region
);

(async () => {
    const client = new identity.IdentityClient({
        authenticationDetailsProvider: provider
    });

    const listUsersRequest = {
        compartmentId: tenancy
    };
    try {
        const listUsersResponse = await client.listUsers(listUsersRequest);
        console.log(listUsersResponse);
    } catch (err) {
        console.log(err);
    }
})();