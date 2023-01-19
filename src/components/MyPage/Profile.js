import { useState, useEffect } from "react";
import { Box, Grid, Stack, Button, TextField, Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chips from "./Chips";
import axios from "axios";

export default function Profile() {
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const info = await axios.get(`http://localhost:8080/user/2`);
    setInfo(info.data);
    console.log(info.data.tagI);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const [edit, setEdit] = useState(false);
  const editChange = () => {
    setEdit(!edit);
    console.log(edit);
  };

  //   const [values, setValues] = useState({
  //     name: name,
  //     intro: intro,
  //     tagP: tagP,
  //     tagI: tagI,
  //   });

  //   useEffect(() => {
  //     async function getUser() {
  //       const user = await axios.get("http://localhost:8080/user/2");
  //       console.log(user.data);
  //       setName(user.data.name);
  //       setIntro(user.data.intro);
  //       setTagP(user.data.tagP);
  //       setTagI(user.data.tagI);
  //     }
  //     getUser();
  //   }, []);

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.id]: event.target.value });
  };

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
              <Grid item xs={9}>
                {edit ? (
                  <TextField
                    sx={{ m: 1 }}
                    label="name"
                    id="name"
                    defaultValue={info.name}
                    size="normal"
                    onChange={handleChange}
                  />
                ) : (
                  <h3>{info.name}</h3>
                )}
              </Grid>
              <Grid item xs={3}>
                <Stack direction="row" alignItems="right" spacing={0.5}>
                  <Button variant="outlined" size="small">
                    공유
                  </Button>
                  {edit ? (
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={editChange}
                    >
                      저장
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={editChange}
                    >
                      편집
                    </Button>
                  )}
                </Stack>
              </Grid>
              {edit ? (
                <TextField
                  sx={{ m: 1, width: "100%" }}
                  label="소개"
                  id="intro"
                  defaultValue={info.intro}
                  size="normal"
                  multiline
                  rows={4}
                  onChange={handleChange}
                />
              ) : (
                <p>{info.intro}</p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ pl: 10, pr: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} alignItems="center">
            <h3> Profile </h3>
            <Chip label={info.tagP}></Chip>
            {/* <Chips mode="Profile" tags={info.tagP} edit={edit} /> */}
          </Grid>
          <Grid item xs={6}>
            <h3> Interest </h3>
            <Chip label={info.tagI}></Chip>
            {/* <Chips mode="Interests" tags={info.tagI} edit={edit} /> */}
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
