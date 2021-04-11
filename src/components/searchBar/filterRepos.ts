// Function to filter catched repository data by name
/**
 * @param {string}  query - query to filter the repos by.
 * @param {Array} allRepositories - Array of all the repositories to filter from.
 * @return {Array} returns filtered array.
 */

export default function filterRepos(query:string, allRepositories:any){
    // if text is cleared, show all data again
    if(query.length === 0){
        return allRepositories;
    }
    return allRepositories.filter((repo:any)=>{
        return repo.name.includes(query)
    })
}