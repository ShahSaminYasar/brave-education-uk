const ErrorMessage = ({ error }) => {
  return (
    <div className="p-5 bg-red-400 text-red-800 font-medium border-2 rounded-lg border-red-800">
      <p>{error?.message}</p>
      <pre>
        {" "}
        {JSON.stringify(
          {
            name: error?.name,
            message: error?.message,
            stack: error?.stack,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
};
export default ErrorMessage;
