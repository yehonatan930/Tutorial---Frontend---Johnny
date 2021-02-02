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
}

export default TemplateService;
