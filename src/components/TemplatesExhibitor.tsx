import {
  WithTemplateContext,
  TemplateProperties,
} from "../utils/TemplateContext";
import { Card, Typography , Accordion, AccordionDetails, AccordionSummary, Button, Input, makeStyles, Theme,createStyles} from "@material-ui/core";
import { withAITracking } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from "../utils/appInsights";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import TemplateService from '../services/template.service';
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme: Theme)=>
    createStyles({
      root: {
        minWidth: 275,
      },
      title: {
        fontSize: 14,
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      }
  }
));

const Templates: React.FC<{
  templateContext: TemplateProperties;
}> = (props) => {
  const [Field1,SetField1] = useState<string>('');
  const [Field2,SetField2] = useState<string>('');
  const [cookie,_] = useCookies(['csrf-token']);

  const classes = useStyles();


  const handleSubmit = ()=>{
    TemplateService.AddTemplate(Field1,Field2,cookie['csrf-token']).then(id=>{
      console.log(id);
      props.templateContext.refreshContext();
    })
  }
  return <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Input placeholder={'Field1'} onChange={(e)=>SetField1(e.currentTarget.value)}></Input>
              <Input placeholder={'Field2'} onChange={(e)=>SetField2(e.currentTarget.value)}></Input>
              <Button onClick={handleSubmit}>submit</Button>
            </AccordionDetails>
          </Accordion>  
    {props.templateContext.templates? props.templateContext.templates.map(template=>
      (
        <Card className={classes.root} key={"templateID-"+template.id} >
          <Typography className={classes.title} color="textPrimary" variant={"h1"} gutterBottom>
            {"This is a template Card"}
          </Typography>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
              {"The first template field content is: " + template.templateField1}
          </Typography>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
              {"The second template field content is: " + template.templateField2}
          </Typography>
        </Card>
      )
    ) : []}
    </>
};
export const TemplateExhibitor = withAITracking(reactPlugin, WithTemplateContext(Templates));
