import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Buttons.css';
import Profile from './Profile'

function ProfileDialog() {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="transparent-button">Profile</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Profile</Dialog.Title>
            <Profile></Profile>
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
  
  export default ProfileDialog;
  