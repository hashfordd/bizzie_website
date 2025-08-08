'use client';

import { Amplify } from 'aws-amplify';
import amplifyOutputs from '../amplify_outputs.json';
import { useEffect } from 'react';

// Configure Amplify
Amplify.configure(amplifyOutputs, { ssr: true });

export default function AmplifyProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure Amplify is configured on the client side
    Amplify.configure(amplifyOutputs);
  }, []);

  return <>{children}</>;
}
