//import { referenceAuth } from '@aws-amplify/backend';
import { referenceAuth } from 'amplify/auth';

export const auth = referenceAuth({
  userPoolId: 'us-east-1_ht2H5Bj34',
  identityPoolId: 'us-east-1:3b5f4e77-0ee4-4d39-8225-798607deb37d',
  authRoleArn: 'arn:aws:iam::xxxx:role/amplify-xxxx-mai-amplifyAuthauthenticatedU-xxxx',
  unauthRoleArn: 'arn:aws:iam::xxxx:role/amplify-xxxx-mai-amplifyAuthunauthenticate-xxxx',
  userPoolClientId: '2jtea7nu27a5qps9t1e04ld2g8',
});