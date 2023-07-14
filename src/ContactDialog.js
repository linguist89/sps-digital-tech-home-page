import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './ContactDialog.css';
import './Buttons.css';

function ContactDialog() {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="transparent-button">Contact</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="ContactDialogOverlay" />
          <Dialog.Content className="ContactDialogContent">
            <Dialog.Title className="ContactDialogTitle">Get in contact</Dialog.Title>
            <Dialog.Description className="ContactDialogDescription">
              Send a message by using the form below or send an email to contact@spsdigitaltech.com
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Your email address
              </label>
              <input className="Input" id="name" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Message
              </label>
              <textarea className="Input" id="username" />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button className="solid-card-button">Send Message</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
  
  export default ContactDialog;
  