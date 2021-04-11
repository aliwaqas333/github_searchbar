import Axios from "axios";
export default async function fetchUser(setFetching:Function, setuser:Function) {
  const apiURL =
    `https://api.github.com/users/${process.env.REACT_APP_GIRHUB_LOGIN}`;
  try {
    setFetching(true)
    const response = await Axios.get(apiURL);
    console.log('response', response)
    setuser(response.data)
    return true;
  } catch (error) {
    setFetching(false)
    return false;
  }
}
