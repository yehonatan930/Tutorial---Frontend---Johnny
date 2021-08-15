import { Template } from "../models/template.model";
import AxiosInstance from "../utils/axios.instance";

export class TemplateService {
  // Get All Books
  static async GetAllTemplates() {
    return AxiosInstance.get<Template[]>("/template").then((response) => {
      const { data } = response;
      return data;
    });
  }

  static async AddTemplate(field1:string,field2:string,csrfToken: string) {
    return AxiosInstance.post(
      "/template",
      {
        TemplateArg1: field1,
        TemplateArg2: field2,
      },
      { withCredentials: true, headers: { "csrf-token": csrfToken } }
    ).then((response) => {
      const { data } = response;
      return data;
    });
  }
}

export default TemplateService;
