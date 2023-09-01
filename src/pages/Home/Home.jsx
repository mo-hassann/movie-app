import React from "react";
import "./Home.scss";
import { Await, defer, useLoaderData } from "react-router-dom";

// import ReviewSection from "../../components/ReviewSection/ReviewSection";
import MoviesSection from "../../components/MoviesSection/MoviesSection";
import Loading from "../../components/Loading/Loading";

import { getHomePageSections } from "../../api";

export default function Home() {
  const { homePageSectionsPromise } = useLoaderData();

  return (
    <div className="home-container">
      <React.Suspense fallback={<Loading />}>
        <Await resolve={homePageSectionsPromise}>{homePageElms}</Await>
      </React.Suspense>
    </div>
  );
}

export async function loader() {
  const homePageSectionsPromise = getHomePageSections();
  return defer({ homePageSectionsPromise });
}

const homePageElms = (homePageSections) => {
  return (
    <>
      {homePageSections.map((section) => (
        <MoviesSection key={section.sectionName} section={section} />
      ))}
    </>
  );
};
