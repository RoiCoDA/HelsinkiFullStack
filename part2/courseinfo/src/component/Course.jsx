import Header from "./Header"
import Part from "./Part"
import Footer from "./Footer";

const Course = ({courses}) => {

    console.log("This is courses: ", courses);
    

    return (
        <>
        { courses.map(course => 
            <>
                <Header name={course.name} />
                <ul>
                    {course.parts.map(item => 
                        <Part key={item.id} name={item.name} hours={item.exercises} />
                    )}
                </ul>
                <Footer total={course.parts.reduce((sum, item) => sum + item.exercises, 0) } />
            </>
        )}
        </>
    )
}

export default Course