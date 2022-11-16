import { Dialog } from '@headlessui/react';
import { BackdropBlur } from '../../components/BackdropBlur';
import { useSoulMachines } from '../../contexts/SoulMachinesContext';
import { Video } from '../Video';
import { VideoControls } from '../VideoControls';
import { useRef } from 'preact/hooks';

export type FullFrameModalProps = {
  isOpen?: boolean;
};

export function FullFrameModal({ isOpen }: FullFrameModalProps) {
  const { toggleLayout } = useSoulMachines();
  const ref = useRef(null);

  return (
    <Dialog ref={ref} open={isOpen} onClose={() => toggleLayout()} className="sm-widget">
      <Dialog.Title className="sm-sr-only">Interactive Digital Person</Dialog.Title>

      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="sm-fixed sm-inset-0 sm-bg-black/40 sm-z-max" aria-hidden="true" />

      <div className="sm-fixed sm-inset-0 md:sm-inset-10 xl:sm-inset-16 sm-z-max sm-overflow-y-auto">
        <Dialog.Panel className="sm-w-full sm-h-full md:sm-rounded-3xl sm-overflow-hidden sm-bg-white sm-transform-gpu sm-border-2 sm-border-solid sm-border-gray-lightest">
          <Video autoConnect={false} />
          <VideoControls />
          {isOpen && <BackdropBlur scrollTargetRef={ref} />}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
