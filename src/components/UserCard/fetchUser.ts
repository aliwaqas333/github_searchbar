import Axios from "axios";

// Parameters may be declared in a variety of syntactic forms
/**
 * @param {Function}  setFetching - Function to change fetching state.
 * @param {string=} setuser - Sets the returned user data from github api.
 * @return {string} return true | false depending on api result state
 */
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
