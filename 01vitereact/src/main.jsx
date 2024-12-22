import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>custom app !</h1>
    </div>
  )
}
//const ReactElement = {
//  type: 'a',
//  props: {
//      href: 'https://google.com',
//      target:'_blank'
// },
//  children:'click me to visit google'
//}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="with Arpit"

const reactElement= React.createElement(             //this method has a proper syntax
  'a',             //tag can be p tag,h1 tag etc 
  {href: "https://google.com", target: '_blank'},
  'click me to visit google',
  anotherUser
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
   reactElement
)
