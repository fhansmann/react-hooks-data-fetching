import React, {useState, useEffect} from 'react';

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

  const [repoList, setrepoList] = useState([])

  useEffect(() => {

    fetch('https://api.github.com/search/repositories?q=language:javascript+stars:>25000&sort=stars&order=desc')
    .then(res => res.json())
    .then(results => results.items.map(({full_name, stargazers_count, html_url, id}) => {
      console.log(  {full_name, stargazers_count, html_url, id} )
      return {full_name, stargazers_count, html_url, id}
    })
    ).then(repoList => setrepoList(repoList))
  }, [])

  return(
    <div>
      <div> Hello World </div>
      <table>
        <tbody>
          <tr><th>Full Name</th><th>Stars</th><th>Link</th></tr>
          {
            repoList.map(repo => (
              <tr>
                <td>{repo.full_name}</td>
                <td>{repo.stargazers_count}</td>
                <td><a href={repo.html_url}> {repo.html_url} </a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

}

export default Home