export type ButtonProps = {
  children: string;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="sm-cursor-pointer sm-justify-center sm-items-center sm-px-4 sm-py-2 sm-absolute sm-font-rubik sm-text-center sm-text-sm sm-tracking-wider sm-uppercase sm-font-medium sm-text-white sm-bg-primary-600 sm-rounded-lg hover:sm-bg-primary-700 active:sm-bg-primary-800 focus:sm-bg-primary-600 focus:sm-border-x-blue-500 focus:sm-drop-shadow-lg disabled:sm-bg-primary-200">
      {children}
    </button>
  );
}
