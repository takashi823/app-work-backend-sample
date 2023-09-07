// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { TaskPage } from "./pages/TaskPage";
import { UploadPage } from "./pages/UploadPage";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* トップページ*/}
        <Route path="/" element={<TopPage />} />
        {/* タスクページ */}
        <Route path="/tasks" element={<TaskPage />} />
        {/* ファイルアップロードページ */}
        <Route path="/file_upload" element={<UploadPage />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  }
};
