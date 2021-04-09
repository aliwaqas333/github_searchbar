import Axios from "axios";

const apiURL = "https://api.github.com/search/repositories";
interface IPost {
  data: object;
}
export default async function fetchRepos(query: String) {
  let success: boolean = true;
  try {
    const response = await Axios.get<IPost[]>(`${apiURL}?q=${query}`);
    return { success, data: response["data"] };
  } catch (error) {
    return { success: false };
  }
}
