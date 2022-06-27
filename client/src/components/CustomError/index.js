import Alert from "react-bootstrap/Alert";

export default function CustomError(error) {
  return (
    <div>
      <Alert key="danger" variant="danger">
        {error}
      </Alert>
    </div>
  );
}
