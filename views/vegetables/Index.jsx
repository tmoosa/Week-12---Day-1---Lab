const React = require("react")


class Index extends React.Component {
  render() {
    const { vegetables } = this.props
    return(
      <div>
        <h1> vegetables Index Page </h1>
        <ul>
          {
            vegetables.map((vegetables, i) => {
              return (
                <li>
                  The{' '}
                    <a href={`/vegetables/${i}`}>
                      {vegetables.name}
                    </a>
                    {' '}
                    is {vegetables.color} <br></br>
                    {
                      vegetables.readyToEat ? 
                        `It is ready to eat`
                      : 
                        `It is not ready to eat`
                    }
                                      <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index 

