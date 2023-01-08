import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Box, Button, Container} from '@mui/material';
import Tag from "../components/Common/Tag";
import Paper from '@mui/material/Paper';

export default function NewQna() {
  return (
    <Container>
      <Paper elevation={0} sx={{ my: { xs: 3}}}>
        <Box display="flex" flexDirection="row" gap={128}>
          <Button size="small"
              type="submit"
              variant="outlined"
            >
              Back
          </Button>
          <Button size="small"
              type="submit"
              variant="outlined"
            >
              완료
          </Button>
        </Box>
      </Paper>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Tag />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth
              required
              id="title"
              name="title"
              label="제목"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth
              required
              id="content"
              name="content"
              label="질문 내용"
              multiline
              maxRows={20}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth
              required
              id="code"
              label="코드"
              multiline
              maxRows={10}
              variant="standard"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}