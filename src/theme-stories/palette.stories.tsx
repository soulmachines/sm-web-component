export default {
  title: `Theme / Palette`,
};

export const Basic = () => {
  return (
    <div className="sm-font-primary">
      <div className="sm-my-5">
        <p className="sm-text-md">Primary</p>
        <div className="sm-flex">
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-primary-lightest sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">lightest</p>
          </div>
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-primary-light sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">light</p>
          </div>
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-primary-base sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">base</p>
          </div>
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-primary-dark sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">dark</p>
          </div>
        </div>
      </div>

      <div className="sm-my-5">
        <p className="sm-text-md">Secondary</p>
        <div className="sm-flex">
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-secondary-base sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">base</p>
          </div>
        </div>
      </div>

      <div className="sm-my-5">
        <p className="sm-text-md">Gray</p>
        <div className="sm-flex">
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-gray-light sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">light</p>
          </div>
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-gray-base sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">base</p>
          </div>
        </div>
      </div>

      <div className="sm-my-5">
        <p className="sm-text-md">Tertiary</p>
        <div className="sm-flex">
          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-tertiary-base sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">base</p>
          </div>

          <div className="sm-flex sm-flex-col sm-items-center">
            <div className="sm-bg-tertiary-dark sm-w-10 sm-h-10" />
            <p className="sm-text-black sm-text-xs">dark</p>
          </div>
        </div>
      </div>
    </div>
  );
};
