// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme, Link, Typography } from "@mui/material";

// サンプルページのメインの実装
export const TopPage = () => {
  return (
    <Box className="TopPage" sx={sx}>
      {/* App.tsxで設定しているTaskPage.tsxのパスをリンクに設定 */}
      <Link href="/task">
        <Typography variant="h2">タスク一覧へ</Typography>
      </Link>
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.TopPage": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
};
