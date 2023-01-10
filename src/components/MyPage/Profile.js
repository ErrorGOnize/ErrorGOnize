import { useState } from "react";
import { Box, Grid, Stack, Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chips from "./Chips";

export default function Profile({ personalInfo }){
    const [ edit, setEdit ] = useState(false);
    const editChange = () => {
        setEdit(!edit);
        console.log(edit)
    }
    console.log(personalInfo)
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
                                id="edit-name"
                                defaultValue={personalInfo.name}
                                size="normal"
                              />):
                            (<h3>{personalInfo.name}</h3>)
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
                                id="edit-intro"
                                defaultValue={personalInfo.intro}
                                size="normal"
                                multiline
                                rows={4}
                              />):
                            (<p>{ personalInfo.intro }</p>)
                    }
                    { edit ? 
                            (<TextField
                                sx={{ m: 1, width: '100%' }}
                                label="website"
                                id="edit-web"
                                defaultValue={personalInfo.web}
                                size="normal"
                              />):
                            (<p>🌐 website: { personalInfo.web }</p>)
                    }
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
                <Chips mode="Interests" data={personalInfo.tagI} edit={edit}/>
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