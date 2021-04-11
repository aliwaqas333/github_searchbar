/**
 * Multiple lines of JSDoc text are written here,
 * wrapped normally.
 * @param {repositeries array} arg A number to do something to.
 */

export default function filterRepos(query:string, allRepositories:any){
    if(query.length === 0){
        return allRepositories;
    }
    return allRepositories.filter((repo:any)=>{
        return repo.name.includes(query)
    })
}