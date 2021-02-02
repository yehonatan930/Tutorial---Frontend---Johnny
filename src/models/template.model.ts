export class Template {
  constructor(id: string, TemplateArg1: string, TemplateArg2: string) {
    this.id = id;
    this.templateField1 = TemplateArg1;
    this.templateField2 = TemplateArg2;
  }
  id: string;
  templateField1: string;
  templateField2: string;
}
