import React from "react";
import { makeStyles, createStyles, LinearProgress } from "@material-ui/core";

const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};

export default Progress;

const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        martinTop: theme.spacing(2),
      },
    },
  });
});
