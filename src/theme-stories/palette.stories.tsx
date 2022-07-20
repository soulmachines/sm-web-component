export default {
  title: `Theme / Palette`,
};

export const Basic = () => {
  const palettes = ['primary', 'secondary', 'grayscale', 'neutral', 'error'];
  const scale = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="sm-font-sansSerif">
      {palettes.map((palette) => {
        return (
          <div className="sm-my-5">
            <p className="sm-text-md sm-capitalize">{palette}</p>
            <div className="sm-flex">
              {scale.map((item) => {
                return (
                  <div className="sm-flex sm-flex-col sm-items-center">
                    <div className={`sm-bg-${palette}-${item} sm-w-10 sm-h-10`} />
                    <p className=" sm-text-grayscale-400 sm-text-xs">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
