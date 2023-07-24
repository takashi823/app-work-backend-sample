// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/sample/Header";
import { MainContent } from "../modules/sample/MainContent";

// タスクを表示するページのメインの実装
export const TaskPage = () => {
  return (
    <Box className="TaskPage" sx={sx}>
      <Header />
      <MainContent />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.TaskPage": {
    width: "100%",    
  }
};
