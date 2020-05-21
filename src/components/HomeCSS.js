import {makeStyles} from "@material-ui/core/styles";

export default function HomeCSS() {
    const useStyles = makeStyles((theme) => ({
        grid:{
            textAlign:"center",
            backgroundColor:"rebeccapurple"
        },
        text:{
            fontFamily:"cursive",
            color: "#426cbc",
            textAlign: "center"
        },
        text2:{
            color: "black",
            fontFamily: "unset",
            width:'100%',
            textAlign:"justify"
        },
        card:{
            width:'100%',
            textAlign:"center"
        },
        content:{
            textAlign:"center"
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        }
    }))

    return useStyles();
}