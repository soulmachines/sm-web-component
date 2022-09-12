const SpeadingDotsAnimation = ({ title }: { title: string }) => {
  return (
    <>
      <span class="sm-sr-only">{title}</span>
      <span className="sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black" />
      <span className="sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black" />
      <span className="sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black" />
      <span className="sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black" />
    </>
  );
};

export default SpeadingDotsAnimation;
