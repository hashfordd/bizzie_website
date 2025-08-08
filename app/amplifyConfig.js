import { Amplify } from 'aws-amplify';
import amplifyOutputs from '../amplify_outputs.json';

// Configure Amplify with your backend outputs
Amplify.configure(amplifyOutputs);

export default amplifyOutputs;
