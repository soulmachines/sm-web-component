import { useState } from 'preact/hooks';
import { Icon } from '../Icon';

export type GreetingProps = {
  message?: string;
};

export function Greeting({ message }: GreetingProps) {
  const [isHidden, setIsHidden] = useState(false);

  if (isHidden) {
    return null;
  }

  return (
    <div>
      <p>{message || "Got any questions? I'm happy to help."}</p>
      <button onClick={() => setIsHidden(true)}>
        <Icon name="close" title="Hide greeting" />
      </button>
    </div>
  );
}
