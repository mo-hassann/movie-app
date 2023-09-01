import { homePageSections } from "./utils";
import { API_URL, API_KEY } from "./config";

export async function getHomePageSections() {
  try {
    // get movies from api and save it in an array
    const homePageSectionsContent = await Promise.all(
      homePageSections.map(async (section) => {
        const res = await fetch(`${API_URL}/movie/${section.sectionName}?api_key=${API_KEY}`);
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

export async function getCurList(curUrl) {
  const params = new URL(curUrl || document.location).searchParams;
  const curPage = params.get("page");
  const curList = params.get("list");

  const res = await fetch(`${API_URL}/movie/${curList}?&page=${curPage}&api_key=${API_KEY}`);
  const data = await res.json();

  return data;
}

export async function handleLogin({ email, password }) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`user loged in sucssessfully email: ${email} ,password: ${password}`);
    }, 3000)
  );
}

export async function handleRegister({ userName, email, password }) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`${userName} registerd sucssessfully email: ${email} ,password: ${password}`);
    }, 3000)
  );
}

// to do
export async function handleSearchParams(key, value, setSearchParams) {
  setSearchParams();
  return null;
}
