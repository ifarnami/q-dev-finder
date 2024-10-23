import { httpGetRequest } from "./baseHttpService";

export const search = async (username: string) => {
  try {
    const response = await httpGetRequest(`/${username}`);

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getRepos = async (username: string, page: number = 1) => {
  try {
    const response = await httpGetRequest(
      `/${username}/repos?per_page=6&page=${page}&sort=date&order=desc`
    );

    return response;
  } catch (error) {
    return error;
  }
};
