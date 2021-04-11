import Axios from "axios";

interface IPost {
  data: object;
}
// Function to fetch data repository data from github api
/**
 * @param   {Number}  page - The page number 
 * @param   {string} per_page - number of data per page
 * @param   {Boolean}  direction - desc | asc
 * @param   {Boolean}  sort - fullname | published | stars 
 * @param   {Boolean}  setfetching - A Function to set fetching state true or false
 * @return {Object} Object of returned github api data
 */
export default async function fetchRepos(
  page: number = 1,
  per_page: number = 100,
  direction: string = "desc",
  sort = "fullname",
  setfetching: Function
) {
  /**
 * @type {string} github v3 api url
 */
  const apiURL:string = "https://api.github.com/users";

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

