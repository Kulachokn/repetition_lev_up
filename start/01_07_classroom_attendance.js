function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  return students;
}

const obj = {
  hasTeachingAssistant: true,
  classList: ["Rad", "John", "Roman", "Lisa", "Otto", "Luke"],
};

console.log(getStudents(obj));
