import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button, Box, Typography} from '@mui/material';

export default function AnswerBox() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={3}
      gap={3}
      sx={{
        borderRadius: 5,
      }}
      border={"5px solid #f3f3f3"}
    >
      <Typography
        fontFamily={"Prosto One"}
        fontWeight={900}
        fontSize="1.5rem"
        color="#FF6A00"
      >
      답변하기
      </Typography>
      <TextField fullWidth
        required
        id="content"
        name="content"
        label="질문에 대한 답변을 남겨주세요"
        multiline
        maxRows={20}
        rows={3}
        variant="outlined"
      />
       <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
          <Button 
                style={{ color: "#424242" ,backgroundColor: "#f5f5f5"}}
            >
            등록
            </Button> 
        </Box>
    </Box>
  );
}