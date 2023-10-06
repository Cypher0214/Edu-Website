import { teacher } from "../../Constants/teacher";
import './teacher.css';

const Teacher = () => {
  return (
    <div className="bg-white py-30 sm:py-14sx">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-6xl mb-16">Our Faculty</h1>
        <div className="grid grid-cols-1 gap-y-12">
          {teacher.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } flex items-center justify-center`}
            >
              <div className="w-1/2 text-black font-jost font-light text-base text-center">
                <h3 className="font-semibold leading-7 tracking-tight text-gray-900">{teacher.name}</h3>
                <p className="font-semibold leading-6 text-indigo-600">{teacher.qualification}</p>
                <p className="leading-6">{teacher.exams}</p>
              </div>
              <div className="w-1/2 flex justify-center items-center"> {/* Added flex and justify-center to center the image */}
                <div>
                  <img
                    src={teacher.images}
                    alt={teacher.name}
                    className="w-96 h-96 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </div>
  );
}

export default Teacher;
