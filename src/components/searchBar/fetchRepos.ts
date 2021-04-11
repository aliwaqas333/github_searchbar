import Axios from "axios";

interface IPost {
  data: object;
}
export default async function fetchRepos(
  setrepos:Function,
  page: number = 1,
  per_page: number = 100,
  direction: string = "desc",
  sort = "fullname",
  setfetching: Function
) {
  const apiURL = "https://api.github.com/users";
  let success: boolean = true;
  try {
    setfetching(true)
    const response = await Axios.get<IPost[]>(
      `${apiURL}/${process.env.REACT_APP_GIRHUB_LOGIN}/repos?type=owner&&per_page=${per_page}&&page=${page}&&direction=${direction}&&sort=${sort}&&accept=application/vnd.github.v3+json`
    );
    setfetching(false)
    return { success, data: response["data"] };
  } catch (error) {
    setfetching(false)
    return { success: false };
  }
}

