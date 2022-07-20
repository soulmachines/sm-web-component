export default {
  title: `Theme / Box Shadow`,
};

export const Basic = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'];

  return (
    <div className="sm-flex sm-gap-x-5">
      {sizes.map((size) => {
        return (
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className={`sm-shadow-${size} sm-w-10 sm-h-10`} />
            <p className=" sm-text-grayscale-400 sm-text-xs">{size}</p>
          </div>
        );
      })}
    </div>
  );
};
