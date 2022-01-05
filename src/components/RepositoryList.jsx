import { useState, useEffect } from "react"
import { RepositoryItem } from "./RespositoryItem"
import '../styles/repositories.scss'
//https://api.github.com/orgs/octo-org/repos



export function RepositoryList() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/facebook/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])



    return (
        <section className="repository-list">
            <h1> repository list</h1>
            <ul>

                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

            </ul>
        </section>
    )
}