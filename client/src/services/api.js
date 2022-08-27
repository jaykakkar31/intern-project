import http from "./httpService";

const server_domain = "";

// function to send signin request to backend
export const signIn = (form) => {
  return http.post(server_domain + "/students/login", form);
};

// function to send signUp request to backend  and return details
export const signUp = (form) => {
  console.log(form);
  return http.post(server_domain + "/students/register", form);
};

// function to update student details
export const  update = (form, id) => {
  return http.put(server_domain + "/students/" + id, form);
};

export const stupdateNotification = (id, event) => {
  return http.patch(server_domain + "/students/notifications/" + id, event);
};

// function to save contact us page form details.
export const sendContacts = (contactDetails) =>
  http.post("/contact", contactDetails);

// ////////////////////////////////////////SIGNIN//////////
export const educatorSignIn = (form) => {
  return http.post(server_domain + "/educator/login", form);
};

export const teacherSignUp = (form) => {
  return http.post(server_domain + "/educator/register", form);
};

///////////////Signup with Google /////////////////////////////

export const studentSignupWithGoogle = (data) => {
  return http.post(server_domain + "/students/signupwithgoogle", data);
};

export const educatorSignupWithGoogle = (data) => {
  return http.post(server_domain + "/educator/signupwithgoogle", data);
};



export const sendEducatorsPersonalInfo = (personalInfo, id) => {
  return http.post(
    server_domain + "/educator/personalInfo/" + id,
    personalInfo
  );
};
export const postLiveclass = (personalInfo, id) => {
  return http.post(server_domain + "/educator/liveclass", personalInfo);
};
// //////////////////////TO UPDATE EDUCATOR'S SETTINGS/////////////////////////////////////////

export const updatePersonal = (form, id) => {
  return http.patch(server_domain + "/educator/settings/account/" + id, form);
};

export const updateBankDetails = (details, id) => {
  return http.patch(
    server_domain + "/educator/settings/bankDetails/" + id,
    details
  );
};

export const updateNotifications = (form, id) => {
  return http.patch(
    server_domain + "/educator/settings/notifications/" + id,
    form
  );
};

export const updatePrivacy = (form, id) => {
  return http.patch(server_domain + "/educator/settings/privacy/" + id, form);
};
////////////Educator ////////////////////////////////////////
export const educatorProfile = () => {
  return http.get(server_domain + "/teacherprofile");
};

export const chatContact = (educator_id) => {
  return http.get(server_domain + "/conversation/" + educator_id);
};

export const chatMessages = (id) => {
  return http.get(server_domain + "/messages/" + id);
};

/////
export const getStudent = (id) => {
  return http.get(server_domain + "/getstudent/students?studentId=" + id);
};

export const sendMessage = (message) => {
  return http.post(server_domain + "/message", message);
};

/////////////////////Student  iitjee /////////////////////////////////////////
export const classUpdate = () => {
  return http.get(server_domain + "/classupdate");
};

export const iitSyllabus = () => {
  return http.get(server_domain + "/coursesyllabus");
};

export const iitCoursePay = () => {
  return http.get(server_domain + "/getpaymentdata");
};

/////////////////////Student  add subscription course after paying
export  const addSubCourse = (id, course) => {
  return http.put(server_domain + "/students/addcourse/"+id, course);
}

// Broadcast

import axios from "axios";
export const fetchId = () => {
	const response = axios.get("/api");

	return response;
};

export const deleteId = (id) => {
	const response = axios({
		method: "delete",
		url: `/api/:id`,
		data: { id: id },
	});
	return response;
};

//Calender
export const saveEvent = (payload) => {
  //console.log(payload);
  const response = axios({
      method: "post",
      url: `/calenderevent`,
      data: payload,
  });
  return response;
};
export async function getEvent () {
  //console.log("getEvent");
  const response = axios({
      method: "get",
      url: "/eventdetails",
  });
  //console.log(response);
  return await response
};
export const deleteEvent = (payload) => {
  //console.log(payload);
  const response = axios({
      method: "delete",
      url: `/deleteevent`,
      data: payload,
  });
  return response;
};
export const updateEvent = (payload) => {
  //console.log(payload);
  const response = axios({
      method: "patch",
      url: `/updateevent`,
      data: payload,
  });
  return response;
};

export const insertVideoId=(payload)=>{
    console.log(payload);
    const response=axios({
        method:"post",
        url:"/videoId",
        data:{data:payload}
    })

    return response
}

// ADMIN


// const server_domain = "";

export const educatorInfo = (id) => {
	return http.get(server_domain + "/admin/" + id);
};

export const enrollEducator = () => {
	return http.get(server_domain + "/admin/pendingeducators");
};

export const sendReport = (edureport) => {
	return http.post(server_domain + "/admin/educatorreport", edureport);
};

export const updateStarredMsg = (data, id) => {
	return http.patch(server_domain + "/admin/addstarred/" + id, data);
};

export const adminSentReport = (data, id) => {
	return http.patch(server_domain + "/admin/sentreport/" + id, data);
};

export const eduVerify = (id) => {
	return http.patch(server_domain + "/admin/verified/" + id);
};