// import { useState } from "react";
import { useTeacherContext } from "@/src/teacher/context/useTeacherContext";
import { useAuthContext } from "@/src/common/context/useAuthContext";
import { fetchWithTimeOut } from "@/src/utils/helperFunctions";
import Constants from "expo-constants";
import { router } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const useCourse = () => {
  const { API_URL } = Constants.expoConfig.extra;
  const { user } = useAuthContext();
  const { setState: setTeacherContext, course } = useTeacherContext();
  const { setItem: setCourse } = useAsyncStorage("course");
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
      if (prev.course)
        prev.course.push({
          subject,
          teacher,
          description,
        });
      else {
        prev.course = [
          {
            subject,
            teacher,
            description,
          },
        ];
      }
      return { ...prev };
    });
  };
  const deleteCourse = ({ index }) => {
    setTeacherContext((prev) => {
      prev.course.splice(index, 1);
      return { ...prev };
    });
  };

  const publishCourse = async () => {
    try {
      setTeacherContext((prev) => ({ ...prev, isLoading: true }));

      const data = { id: user.classId, course };
      console.log("sending course data to server : ", data);
      // request option object
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const url = `${API_URL}/course/publish`;
      const response = await fetchWithTimeOut({ url, requestOptions });
      const result = await response.json();
      console.log("Response from server on publish of course", result);
      // set loading indicator false
      setTeacherContext((prev) => ({ ...prev, isLoading: false }));
      router.navigate("/common/publish/successful");
    } catch (error) {
      setTeacherContext((prev) => ({ ...prev, isLoading: false }));
      router.navigate("/common/publish/failure");
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("course data is stored in local");
    
    // changes in the course are added to local storage
    setCourse(JSON.stringify(course));
  }, [course?.length]);
  return {
    // ...state,
    // setState,
    insertCourse,
    editCourse,
    deleteCourse,
    publishCourse,
  };
};
export default useCourse;
