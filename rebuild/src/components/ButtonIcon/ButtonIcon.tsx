import path from "./paths";

export function ButtonControls() {
  return (<div key={path} className="sm-flex sm-flex-row sm-justify-center sm-items-center sm-px-4 sm-py-2 sm-absolute sm-bg-primary-600 sm-rounded-lg hover:sm-bg-primary-700 active:sm-bg-primary-800 focus:sm-bg-primary-600 focus:sm-border-x-blue-500 focus:sm-drop-shadow-lg disabled:sm-bg-primary-200">
    <span className="sm-font-rubik sm-text-center sm-text-sm sm-not-italic sm-tracking-wider sm-font-medium sm-text-white sm-flex-none sm-flex-grow-0">BUTTON</span>
    </div>);
}