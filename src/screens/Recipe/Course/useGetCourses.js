import { useEffect, useState } from "react";
import coursesJson from "../../../data/courses.json";
const useGetCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(coursesJson);
  }, []);
  return courses;
};

export default useGetCourses;
