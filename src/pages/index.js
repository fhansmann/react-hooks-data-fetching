import React, {useState, useEffect, Fragment} from 'react';

/*
Pseude code:

1) Create Query
2) Make API Call on App Load
3) Parse the Data - Map!
4) Set to State
5) Display Data
6) Handle Loading Errors / Success Message

*/

const Home = () => {

  const [repoList, setrepoList] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {

      fetch('https://api.github.com/search/repositories?q=language:javascript+stars:>25000&sort=stars&order=desc')
      .then(res => res.json())
      .then(results => results.items.map(({full_name, stargazers_count, html_url, id}) => {
        throw new Error("My Error")
        return {full_name, stargazers_count, html_url, id}
      })
      ).then(repoList => setrepoList(repoList))
      .catch(err => setrepoList([]))
    }, 1500)
    return () => clearTimeout(timer)

  }, [])

  return(
    <div>
      {repoList === null ? 
      ( <div> Loading </div>) :
      repoList.length > 0 ? (
      <table>
        <tbody>
          <tr><th>Full Name</th><th>Stars</th><th>Link</th></tr>
          {
            repoList.map(repo => (
              <Fragment key = {repo.id}>
              <tr>
                <td>{repo.full_name}</td>
                <td>{repo.stargazers_count}</td>
                <td><a href={repo.html_url}> {repo.html_url} </a></td>
              </tr>
              </Fragment>
            ))
          }
        </tbody>
      </table>
      ) : <div> Error, please try again </div> }
    </div>
  )

}

export default Home