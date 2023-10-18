import { teacher } from "../../Constants/teacher";
import './Teachers.css';

const Teacher = () => {
  return (
    <div className="teacher_main bg-white py-30 mb-20 sm:py-12sx">
      <div className="teacher_main_sub mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="teachers_heading text-center text-6xl mb-16">Our Faculty</h1>
        <div className="teacher_block_main grid grid-cols-1 gap-y-12">
          {teacher.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } flex items-center teacher_blocks justify-center`}
            >
              <div className="teacher_details w-1/2 text-black font-jost font-light text-base text-center">
                <h3 className="font-semibold leading-7 tracking-tight text-gray-900">{teacher.name}</h3>
                <p className="font-semibold leading-6 text-indigo-600">{teacher.qualification}</p>
                <p className="leading-6">{teacher.exams}</p>
              </div>
              <div className="teacher_image_div w-1/2">
                <div
                  className="teacher_image w-80 h-80 rounded-full bg-cover bg-no-repeat bg-lightgray50"
                  style={{ backgroundImage: `url(${teacher.images})` }}
                >
                </div>
                <hr className="teacher_division"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teacher;
