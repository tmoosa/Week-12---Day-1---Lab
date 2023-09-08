const React = require('react')
class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {
                        vegetables.map((vegetable, i) => {
                            return (
                                <li>
                                    <a href={`/vegetables/${vegetable._id}`}>
                                        {vegetable.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <nav>
                    <a href="/vegetables/new">Create a New Vegetable</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;