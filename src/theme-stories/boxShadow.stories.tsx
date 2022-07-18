export default {
  title: `Theme / Box Shadow`,
};

export const Basic = () => {
  return (
    <div className="sm-flex sm-gap-x-5">
      <div className="sm-flex sm-flex-col sm-items-center">
        <div className="sm-shadow-sm sm-w-10 sm-h-10" />
        <p className="sm-text-grayscale-400 sm-text-xs">sm</p>
      </div>

      <div className="sm-flex sm-flex-col sm-items-center">
        <div className="sm-shadow-md sm-w-10 sm-h-10" />
        <p className="sm-text-grayscale-400 sm-text-xs">md</p>
      </div>

      <div className="sm-flex sm-flex-col sm-items-center">
        <div className="sm-shadow-lg sm-w-10 sm-h-10" />
        <p className="sm-text-grayscale-400 sm-text-xs">lg</p>
      </div>

      <div className="sm-flex sm-flex-col sm-items-center">
        <div className="sm-shadow-xl sm-w-10 sm-h-10" />
        <p className="sm-text-grayscale-400 sm-text-xs">xl</p>
      </div>
    </div>
  );
};
