import { useState } from 'preact/hooks';

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
      {/* TODO: add icon once pr merged */}
      <button onClick={() => setIsHidden(true)}>Close</button>
    </div>
  );
}
