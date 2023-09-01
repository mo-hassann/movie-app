import React from "react";
import { getCurList } from "../../api";
import { Await, defer, useLoaderData } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Movies from "./Movies";

export default function MoviesList() {
  const { curListPromise } = useLoaderData();

  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <Await resolve={curListPromise}>{curListElms}</Await>
      </React.Suspense>
    </div>
  );
}

export function loader({ request }) {
  const curListPromise = getCurList(request.url);
  return defer({ curListPromise });
}

const curListElms = (curList) => <Movies movies={curList.results} />;
