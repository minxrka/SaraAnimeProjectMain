import React, { Suspense, Route } from "react";
// Assuming you have a Loader component
import { Loader } from "../Loader/loader";

const HomeLazy = React.lazy(() =>
  import("../../pages/HomePage/HomePage").then((module) => {
    // Add a delay of 2 seconds (2000 milliseconds)
    return new Promise((resolve) => setTimeout(() => resolve(module), 200000));
  })
);
function LazyRoute({ component: HomeLazy }) {
  return (
    <Suspense fallback={<Loader />}>
      <HomeLazy />
    </Suspense>
  );
}

export default LazyRoute;
