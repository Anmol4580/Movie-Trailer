interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-center p-4 bg-red-50 text-red-600 rounded-lg">
    {message}
  </div>
);