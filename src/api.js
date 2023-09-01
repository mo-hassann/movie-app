import {
  NOW_PLAYING_MOVIES_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "./config";

export async function getHomePageSections() {
  try {
    const homePageSections = {
      reviewSections: [
        {
          url: NOW_PLAYING_MOVIES_URL,
          sectionContent: {},
          size: "medium",
        },
      ],
      mainSections: [
        {
          sectionName: "popular",
          url: POPULAR_MOVIES_URL,
          sectionContent: {},
          title: "popular",
        },
        {
          sectionName: "top_rated",
          url: TOP_RATED_MOVIES_URL,
          sectionContent: {},
          title: "top rated",
        },
        {
          sectionName: "upcoming",
          url: UPCOMING_MOVIES_URL,
          sectionContent: {},
          title: "upcomng",
        },
      ],
    };

    // get movies from api and save it in an array
    const reviewSectionsContent = await Promise.all(
      homePageSections.reviewSections.map(async (section) => {
        const res = await fetch(section.url);
        const data = await res.json();
        return data;
      })
    );

    const mainSectionsContent = await Promise.all(
      homePageSections.mainSections.map(async (section) => {
        const res = await fetch(section.url);
        const data = await res.json();
        return data;
      })
    );

    // save the movies in the home page object
    homePageSections.reviewSections.forEach(
      (section, i) => (section.sectionContent = reviewSectionsContent[i])
    );

    homePageSections.mainSections.forEach(
      (section, i) => (section.sectionContent = mainSectionsContent[i])
    );

    // console log the results
    console.log(reviewSectionsContent);
    console.log(mainSectionsContent);
    console.log(homePageSections);

    return homePageSections;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getListWithName(sectionName) {}
