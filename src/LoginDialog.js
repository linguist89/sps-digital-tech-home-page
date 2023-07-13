import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './LoginDialog.css';
import './Buttons.css';
import GoogleAuthentication from './GoogleAuthentication';
import LoginWithEmailLink from './PasswordlessLogin';
import PasswordSignupAuthentication from './PasswordSignupAuthentication';
import PasswordLoginAuthentication from './PasswordLoginAuthentication';

function LoginDialog() {
    return (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="transparent-button">Login</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent" style={{height: '95vh'}}>
        <div className="social-logins">
          <GoogleAuthentication></GoogleAuthentication>
          <LoginWithEmailLink></LoginWithEmailLink>
          <PasswordLoginAuthentication></PasswordLoginAuthentication>
          <PasswordSignupAuthentication></PasswordSignupAuthentication>
        </div>        
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)};

export default LoginDialog;
