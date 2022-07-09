const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/error404.jpg" alt="a computer that is being coded on with some flashing lights behind it" />
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
module.exports = error404
