import { teacher } from "../../Constants/teacher"
// import {images} from '../../Constants/images'
import './teacher.css'
const Teacher = () => {
  return (
    <div className="flex flex-col ">
       <h1 className="head text-5xl font-bold text-center "> Our Faculties </h1> 

       <ul role="list" className="grid gap-x-4 gap-y-12 sm:grid-row-2 sm:gap-y-8 xl:row-span-2">
    {teacher.map((teacher) => (
      <li key={teacher.id}>
      <div className="hero min-h-screen bg-base-200 basis-1/2">
    
        <div className="hero-content flex-col lg:flex-row">
          <img src={teacher.images} className="img" />
          <div>
            <h1 className="text-5xl font-bold">{teacher.name}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </li>
    ))}
  </ul>
      {/* <div className="hero min-h-screen bg-base-200 basis-1/2 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Teacher;
{/* <div className="bg-white py-30 sm:py-32">
<div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
  <div className="max-w-2xl">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
  </div>
  <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
    {teacher.map((teacher) => (
      <li key={teacher.id}>
        <div className="flex items-center gap-x-6">
          <img className="h-20 w-20 rounded-full" src={teacher.images} alt="" />
          <div>   
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{teacher.name}</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">{teacher.subject}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>
</div> */}