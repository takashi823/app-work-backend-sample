import { Box, SxProps, Theme, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      <Typography variant="h2">タスク一覧</Typography>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
};
