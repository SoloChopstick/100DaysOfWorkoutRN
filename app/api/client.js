import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.0.0.62:9000/api",
});

export default apiClient;

// apiClient.get("/listings").then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });
