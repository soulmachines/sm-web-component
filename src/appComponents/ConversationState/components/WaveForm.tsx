const WaveFormAnimation = ({ title }: { title: string }) => {
  return (
    <>
      <span class="sm-sr-only">{title}</span>
      <span className="sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_1.3s_ease-in-out_infinite_0.3s]" />
      <span className="sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_0.95s_ease-in-out_infinite]" />
      <span className="sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_0.65s_ease-in-out_infinite_0.15s]" />
      <span className="sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_1s_ease-in-out_infinite_0.5s]" />
    </>
  );
};

export default WaveFormAnimation;
