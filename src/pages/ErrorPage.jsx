import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className="w-screen h-screen flex flex-row items-center justify-center text-4xl overflow-hidden">
      <div title={error?.error?.message}>
        {error.status}
        {" | "}
        {error.statusText}
      </div>
    </div>
  );
};

export default ErrorPage;
