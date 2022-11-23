import { Dialog } from '@headlessui/react';
import { MutableRef } from 'preact/hooks';

export type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
  title: string;
  description?: string;
};

export function Modal({ isOpen, onClose, children, title, description }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="sm-widget">
      <Dialog.Title className="sm-sr-only">{title}</Dialog.Title>
      {description && <Dialog.Description className="sm-sr-only">{description}</Dialog.Description>}

      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="sm-fixed sm-inset-0 sm-bg-black/40 sm-z-max" aria-hidden="true" />

      <div className="sm-fixed sm-inset-0 md:sm-inset-10 xl:sm-inset-16 sm-z-max">
        <Dialog.Panel className="sm-w-full sm-h-full md:sm-rounded-3xl sm-bg-white sm-transform-gpu sm-border-2 sm-border-solid sm-border-gray-lightest sm-overflow-hidden">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
