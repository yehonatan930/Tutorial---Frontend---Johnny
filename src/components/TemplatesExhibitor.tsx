import {
  WithTemplateContext,
  TemplateProperties,
} from "../utils/TemplateContext";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        <Card className={classes.root} key={"templateID-"+template.id}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {template.templateField1}
          </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {"The TemplateField1 content is: " + template.templateField1}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
              {"The TemplateField2 content is: " + template.templateField2}
          </Typography>
        </Card>
      )
    ) : []}
    </>
};
export const TemplateExhibitor = WithTemplateContext(Templates);
