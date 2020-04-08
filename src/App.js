import React from 'react';
import Amplify, {API} from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'
import '@aws-amplify/ui/dist/style.css';
import './main.css'
import Init from './Init';

Amplify.configure(awsconfig);



function App() {
  return (
    <Init />
    );
}

//export default App;
export default withAuthenticator(App, true);
