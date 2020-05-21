import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HomeCSS from "./HomeCSS";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

export default function Home() {

    const classes = HomeCSS();
    const [files, setFiles] = useState(null);

    function handleSave({target}) {
        const fileReader = new FileReader();

        fileReader.readAsText(target.files[0]);
        fileReader.onload = (e) => {
            setFiles(e.target.result);
        }

        console.log(files);
    }

    return (
        <Container>
            <Grid container justify={"center"}>
                <Grid container justify={"center"}>
                    <Grid item xs={5}>
                        <br/><br/><br/><br/><br/><br/>
                        <Card variant={"outlined"}>
                            <CardContent className={classes.content}>
                                <Typography variant={"h1"} className={classes.text}>
                                    Bienvenido
                                </Typography>
                            </CardContent>
                            <Divider/>
                            <CardContent className={classes.text}>
                                <Typography variant={"h6"} className={classes.text2}>
                                    Por favor carga el archivo que contiene los datos que se desean limpiar presionando del siguinete botón
                                </Typography>
                            </CardContent>
                            <Divider/>
                            <CardContent className={classes.text}>
                                <input
                                    accept="text/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={handleSave}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload
                                    </Button>
                                </label>
                            </CardContent>
                            <Divider/>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}