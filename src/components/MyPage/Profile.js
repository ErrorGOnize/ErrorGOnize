import { useState,useEffect } from "react";
import { Box, Grid, Stack, Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chips from "./Chips";
import axios from "axios";


export default function Profile(){
    const [ edit, setEdit ] = useState(false);
    const editChange = () => {
        setEdit(!edit);
        console.log(edit)
    }

    const [values, setValues] = useState({
        name: name,
        intro: intro,
        tagP: tagP,
        tagI: tagI
    });

    const [name, setName] = useState("");
    const [intro, setIntro] = useState("");
    const [tagP, setTagP] = useState("");
    const [tagI, setTagI] = useState("");

    useEffect(() => {
    async function getUser(){
        const user = await axios.get("http://localhost:8080/user/2");
        console.log(user.data);
        setName(user.data.name);
        setIntro(user.data.intro);
        setTagP(user.data.tagP);
        setTagI(user.data.tagI);
    };
    getUser();
    }, []);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.id]:event.target.value });
    }

    return (
        <Box >
            <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                <Grid container spacing={2}>
                <Grid item xs={4} alignItems="center">
                    <Avatar
                    alt="name"
                    sx={{
                        bgcolor: "dodgerblue",
                        width: "50%",
                        pt: "25%",
                        pb: "25%",
                    }}
                    ></Avatar>
                </Grid>
                <Grid item xs={8}>
                    <Grid container>
                    <Grid item xs={9}>
                        { edit ? 
                            (<TextField
                                sx={{ m: 1 }}
                                label="name"
                                id="name"
                                defaultValue={name}
                                size="normal"
                                onChange={handleChange}
                              />):
                            (<h3>{name}</h3>)
                        }
                    </Grid>
                    <Grid item xs={3}>
                        <Stack direction="row" alignItems="right" spacing={0.5}>
                        <Button variant="outlined" size="small">공유</Button>
                        { edit ? 
                            (<Button variant="outlined" size="small" onClick={editChange}>저장</Button>):
                            (<Button variant="outlined" size="small" onClick={editChange}>편집</Button>)
                        }
                        </Stack>
                    </Grid>
                    { edit ? 
                            (<TextField
                                sx={{ m: 1, width: '100%' }}
                                label="소개"
                                id="intro"
                                defaultValue={intro}
                                size="normal"
                                multiline
                                rows={4}
                                onChange={handleChange}
                              />):
                            (<p>{ intro }</p>)
                    }
                    </Grid>
                </Grid>
                </Grid>
            </Box>
            <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
            <Grid container spacing={5}>
            <Grid item xs={6} alignItems="center">
                <Chips mode="Profile" tags={tagP} edit={edit}/>
            </Grid>
            <Grid item xs={6}>
                <Chips mode="Interests" tags={tagI} edit={edit}/>
            </Grid>
            </Grid>
        </Box>
        </Box>
    );
}

/*
if (!edit)
        return (
            <Box >
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={4} alignItems="center">
                        <Avatar
                        alt="name"
                        sx={{
                            bgcolor: "dodgerblue",
                            width: "50%",
                            pt: "25%",
                            pb: "25%",
                        }}
                        ></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container>
                        <Grid item xs={9}><h3>{personalInfo.name}</h3></Grid>
                        <Grid item xs={3}>
                            <Stack direction="row" alignItems="right" spacing={0.5}>
                            <Button variant="outlined" size="small">공유</Button>
                            <Button variant="outlined" size="small" onClick={editChange}>편집</Button>
                            </Stack>
                        </Grid>
                        <p>{ personalInfo.intro }</p>
                        <p>🌐 website: { personalInfo.web }</p>
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                <Grid container spacing={5}>
                <Grid item xs={6} alignItems="center">
                    <Chips mode="Profile" data={personalInfo.tagP} edit={edit}/>
                </Grid>
                <Grid item xs={6}>
                    <Chips mode="Interests" data={personalInfo.tagI} />
                </Grid>
                </Grid>
            </Box>
          </Box>
        );
    else
    return (
        <Box>
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={4} alignItems="center">
                        <Avatar
                        alt="name"
                        sx={{
                            bgcolor: "dodgerblue",
                            width: "50%",
                            pt: "25%",
                            pb: "25%",
                        }}
                        ></Avatar>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container>
                        <Grid item xs={9}><h3>{personalInfo.name}</h3></Grid>
                        <Grid item xs={3}>
                            <Stack direction="row" alignItems="right" spacing={0.5}>
                            <Button variant="outlined" size="small">공유</Button>
                            <Button variant="outlined" size="small" onClick={editChange}>저장</Button>
                            </Stack>
                        </Grid>
                        <p>{ personalInfo.intro }</p>
                        <p>🌐 website: { personalInfo.web }</p>
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
                <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
                <Grid container spacing={5}>
                <Grid item xs={6} alignItems="center">
                    <Chips mode="Profile" data={personalInfo.tagP} edit={edit}/>
                </Grid>
                <Grid item xs={6}>
                    <Chips mode="Interests" data={personalInfo.tagI} edit={edit} />
                </Grid>
                </Grid>
            </Box>
          </Box>
    );
*/

/** website
 * { edit ? 
                            (<TextField
                                sx={{ m: 1, width: '100%' }}
                                label="website"
                                id="edit-web"
                                defaultValue={personalInfo.intro}
                                size="normal"
                              />):
                            (<p>🌐 website: { personalInfo.intro }</p>)
                    }
 */