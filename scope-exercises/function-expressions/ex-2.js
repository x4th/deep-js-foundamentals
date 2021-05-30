const getStudentById = (studentId) =>
  studentRecords.find((student) => student.id === studentId)

const printRecords = (recordIds) =>
  recordIds
    .map(getStudentById)
    .sort((r1, r2) => (r1.name < r2.name ? -1 : r1.name > r2.name ? 1 : 0))
    .forEach((record) =>
      console.log(
        `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
      )
    )

const paidStudentsToEnroll = () => [
  ...currentEnrollment,
  ...studentRecords
    .filter((record) => record.paid && !currentEnrollment.includes(record.id))
    .map((record) => record.id),
]

const remindUnpaid = (recordIds) =>
  printRecords(
    recordIds
      .map(getStudentById)
      .filter((record) => !record.paid)
      .map((record) => record.id)
  )

// ********************************

var currentEnrollment = [410, 105, 664, 375]

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
]

printRecords(currentEnrollment)
console.log("----")
currentEnrollment = paidStudentsToEnroll()
printRecords(currentEnrollment)
console.log("----")
remindUnpaid(currentEnrollment)

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
