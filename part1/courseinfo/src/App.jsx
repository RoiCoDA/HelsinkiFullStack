const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({parts}) => {
  console.log("In content: ", parts)
  console.log(parts)
  return (
    <>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </>
  )
}

const Part = ({part}) => {
  console.log(part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[0] + parts[1] + parts[2]}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundementals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }
 
  return (
    <>
      <Header course={course.name} />
      <Content parts={[course.parts[0],course.parts[1],course.parts[2]]}/>
      <Total parts={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]}/>
    </>
  )
}

export default App
