import {
  WithTemplateContext,
  TemplateProperties,
} from "../utils/TemplateContext";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withAITracking } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from "../utils/appInsights";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const Templates: React.FC<{
  templateContext: TemplateProperties;
}> = (props) => {
  const classes = useStyles();
  return <>
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
