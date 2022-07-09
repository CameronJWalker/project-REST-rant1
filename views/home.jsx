const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/soup.jpg" alt="3 bowls of soup on a table" />
              </div>
                <a href="/places"> 
                  <button className="btn-primary">Places Page</button>
                </a>

          </main>
      </Def>
    )
  }
  
module.exports = home
