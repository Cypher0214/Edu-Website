import { teacher } from "../../Constants/teacher";

const Teacher = () => {
  return (
    <div className="teacher_main bg-white py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
      <div className="teacher_main_sub mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="teachers_heading text-center text-4xl sm:text-5xl lg:text-6xl mb-8 sm:mb-10 lg:mb-12">Our Faculty</h1>
        {teacher.map((teacher, index) => (
          <div
            key={teacher.id}
            className={`${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            } flex flex-col sm:flex-row justify-center items-center teacher_blocks mb-8 sm:mb-12 lg:mb-16`}
          >
            <div className="teacher_image_div w-full sm:w-1/2">
              <div
                className="teacher_image w-40 h-40 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-cover bg-no-repeat bg-lightgray50 m-auto sm:m-0"
                style={{ backgroundImage: `url(${teacher.images})` }}
              ></div>
              <hr className="teacher_division mt-4 sm:mt-0 lg:mt-0" />
            </div>
            <div className="teacher_details w-full sm:w-1/2 text-black font-jost font-light text-base text-center sm:text-left">
              <h3 className="font-semibold leading-7 tracking-tight text-gray-900">{teacher.name}</h3>
              <p className="font-semibold leading-6 text-indigo-600">{teacher.qualification}</p>
              <p className="leading-6">{teacher.exams}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teacher;
