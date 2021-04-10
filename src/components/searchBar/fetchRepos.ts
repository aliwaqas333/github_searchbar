import Axios from "axios";

interface IPost {
  data: object;
}
export default async function fetchRepos(
  query: string,
  page: number = 1,
  per_page: number = 10,
  order: string = "desc",
  accept: string = "application/vnd.github.v3+json"
) {
  const apiURL = "https://api.github.com/search/repositories";
  let success: boolean = true;
  try {
    const response = await Axios.get<IPost[]>(
      `${apiURL}?q=${query}&&per_page=${per_page}&&page=${page}&&order=${order}&&accept=${accept}`
    );

    console.log("response", response);
    return { success, data: response["data"] };
  } catch (error) {
    return { success: false };
  }
}

