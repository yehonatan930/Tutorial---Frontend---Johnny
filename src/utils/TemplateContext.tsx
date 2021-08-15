import React, { createContext } from "react";
import { Template } from "../models/template.model";
import TemplateService from "../services/template.service";

// Representation of the state
export interface TemplateProperties {
  templates:Template[];
  updateTemplates: (templates:Template[]) => void;
  refreshContext: ()=>void;
}

// The context Itself
export const TemplateContext = createContext<TemplateProperties>({} as TemplateProperties);

// Provider class
export class TemplateProvider extends React.Component<{}, TemplateProperties> {
  constructor(props: any) {
    super(props);
    this.state = {
      templates:[],
      updateTemplates: (_templates:Template[])=>{},
      refreshContext: this.refreshContext
    };
    this.setState({...this.state,updateTemplates:this.updateTemplates})
    // getting the Whole data from the API
    this.refreshContext();
  }

  updateTemplates = (templates: Template[]) => {
    this.setState({ ...this.state, templates });
  };


  refreshContext: () => Promise<void> = async () => {
    //const soldierId = LoggedUtils.getLoggedId();

    // let flagExist = await AuthorizationsService.checkUserExist();
    // await AuthorizationsService.setUser();
    // subscribeUser();
    TemplateService.GetAllTemplates()
      .then((data) => {
        this.updateTemplates(data);
      })
      .catch((err) => {
        console.log("the response error is :" + err);
      });
  };

  render() {
    return <TemplateContext.Provider value={this.state}>{this.props.children}</TemplateContext.Provider>;
  }
}

// higher-order-component for components to use the context
export const WithTemplateContext = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: any) => {
    return (
      <TemplateContext.Consumer>
        {(templates) => <Component {...(props as P)} templateContext={templates} />}
      </TemplateContext.Consumer>
    );
  };
};
