import { useState } from "react";
import useTeacherContext from "@/src/context/useTeacherContext";
const useCourse = () => {
  const [state, setState] = useState();
  const { setState: setTeacherContext } = useTeacherContext();
  const editCourse = ({ index, subject, teacher, description }) => {
    setTeacherContext((prev) => {
      prev.course[index] = {
        subject,
        teacher,
        description,
      };
      return {
        ...prev,
      };
    });
  };
  const insertCourse = ({ subject, description, teacher }) => {
    setTeacherContext((prev) => {
      prev.course.push({
        subject,
        teacher,
        description,
      });
      return { ...prev };
    });
  };
  const deleteCourse = ({ index }) => {
    setTeacherContext((prev) => {
      prev.course.splice(index, 1);
      return { ...prev };
    });
  };
  return {
    ...state,
    setState,
    insertCourse,
    editCourse,
    deleteCourse,
  };
};
export default useCourse;
