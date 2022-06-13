export type ButtonProps = {
  children: string;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="sm-cursor-pointer sm-px-4 sm-py-2 sm-font-rubik sm-text-sm sm-tracking-wider sm-uppercase sm-font-medium sm-text-white sm-bg-primary-600 sm-rounded-lg hover:sm-bg-primary-700 active:sm-bg-primary-800 focus:sm-bg-primary-600 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200 disabled:sm-bg-primary-200 disabled:sm-cursor-not-allowed">
      {children}
    </button>
  );
}
