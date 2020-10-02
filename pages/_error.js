import { useEffect } from "react";
import { useRouter } from "next/router";

// Here you would fetch and return the user
const Error = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return <div>Redirecting...</div>;
};

export default Error;
