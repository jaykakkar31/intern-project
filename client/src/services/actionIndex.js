import axios from "axios";

const API = axios.create({ baseURL: "/" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).educatorToken
//     }`;
//   }

//   return req;
// });

// ///////////////////////////////////////////////FOR LIVE CLASSES////////////////////////////////////////////

export const fetchClasses = () => API.get("/educator/classes");
export const createClass = (newClass) =>
  API.post("/educator/liveclass", newClass);
export const updateClass = (id, updatedClass) =>
  API.patch(`/classes/${id}`, updatedClass);
export const deleteClass = (id) => API.delete(`/classes/${id}`);

// ///////////////////////////////////////////////FOR EDUCATOR AUTH////////////////////////////////////////////

export const educatorSignin = (formData) =>
  API.post("/educator/login", formData);
export const educatorSignup = (formData) =>
  API.post("/educator/register", formData);
export const updatePersonal = (info, id) =>
  API.patch(`/educator/personalInfo/${id}`, info);

// /////////////////////////////////////////////Settings' UPDATE////////////////////////////////////////////////

// export const updateDetails = (details, id) =>
//   API.patch("/educator/settings/account", details);
// export const updateNotifications = (notifications, id) =>
//   API.patch("/educator/settings/notifications", notifications);
// export const updateBankDetails = (bankDetails, id) =>
//   API.patch("/educator/settings/bankDetails", bankDetails);
// export const updatePrivacy = (privacy, id) =>
//   API.patch("/educator/settings/privacy", privacy);

// ///////////////////////////////////////////////FOR BATCHES///////////////////////////////////////////////////

export const createBatch = (newBatch) => {
  API.post("educator/batch", newBatch);
};
