import {
  NOW_PLAYING_MOVIES_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "./config";

export async function getHomePageSections() {
  try {
    const homePageSections = [
      {
        sectionName: "now_playing",
        sectionType: "review",
        url: NOW_PLAYING_MOVIES_URL,
        sectionContent: {},
        title: "now playng",
        cardSize: "medium",
      },
      {
        sectionName: "popular",
        sectionType: "main",
        url: POPULAR_MOVIES_URL,
        sectionContent: {},
        title: "popular",
        cardSize: "small",
      },
      {
        sectionName: "top_rated",
        sectionType: "main",
        url: TOP_RATED_MOVIES_URL,
        sectionContent: {},
        title: "top rated",
        cardSize: "small",
      },
      {
        sectionName: "upcoming",
        sectionType: "main",
        url: UPCOMING_MOVIES_URL,
        sectionContent: {},
        title: "upcomng",
        cardSize: "small",
      },
    ];

    // get movies from api and save it in an array
    const homePageSectionsContent = await Promise.all(
      homePageSections.map(async (section) => {
        const res = await fetch(section.url);
        const data = await res.json();
        return data;
      })
    );

    // save the movies in the home page object
    homePageSections.forEach((section, i) => (section.sectionContent = homePageSectionsContent[i]));

    // console log the results
    console.log(homePageSections);

    return homePageSections;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getListWithName(sectionName) {}
