import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './ContactDialog.css';
import './Buttons.css';

function LoginDialog() {
    return (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="transparent-button">Login</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent" style={{height: '95vh'}}>
        <iframe 
            title="Login Form"
            width="100%" 
            height="100%" 
            src="https://youtube-insights.anvil.app/" 
        ></iframe>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
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
