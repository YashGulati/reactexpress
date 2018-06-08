const React = require('react')
const ReactDOM = require('react-dom')

const a = 10
const style = {
  background: 'red',
  borderRadius: 50
}

// const Section = (
//   <div class="section">
//     <h3>Section</h3>
//     <p>Paragraph for section</p>
//   </div>
// )

const values = [ 1,2,3,4 ]

const Sections = values.map( (value)=> {
  return (
    <div class="section">
      <h3>Section {value}</h3>
      <p>Paragraph for section</p>
    </div>
  )
})

const blog_values = [
  {title: 'Blog Post 1', date: '1/2/3', content: 'This is the first post of our blog.'},
  {title: 'Blog Post 2', date: '2/2/3', content: 'This is the second post of our blog.'},
  {title: 'Blog Post 3', date: '3/2/3', content: 'This is the third post of our blog.'},
  {title: 'Blog Post 4', date: '4/2/3', content: 'This is the fourth post of our blog.'},
]
const BlogSections = blog_values.map( (value)=> {
  const title = value.title.slice(1)
  return (
    <div class="section">
      <h3>{title}</h3>
      <p><small>{value.date}</small></p>
      <p>{value.content}</p>
    </div>
  )
})

const App = (
    <div>
      <h1 style={ style }>ABC {a}</h1>
      <p>Para</p>
      <button class="btn btn-primary">Submit</button>
      <hr/>
      { Sections }
      { BlogSections }
    </div>
)

ReactDOM.render(
  App,
  document.getElementById('app')
);
