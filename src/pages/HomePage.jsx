import React from "react";

import { useAuth } from "../hooks/useAuth";

function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p>HomePage</p>
    </div>
  );
}

export default HomePage;
