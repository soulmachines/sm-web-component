export type VideoProps = {
  apiKey: string;
};

export function Video({ apiKey }: VideoProps) {
  return <div>Video {apiKey}</div>;
}
