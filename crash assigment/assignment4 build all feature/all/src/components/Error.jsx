import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Error() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong</AlertDescription>
    </Alert>
  );
}

export default Error