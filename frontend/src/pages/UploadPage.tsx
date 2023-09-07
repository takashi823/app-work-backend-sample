// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";
import { useState } from "react";
import axios, { AxiosError } from "axios"

export const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickSubmit = async () => {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", text);

    await axios.post(`http://127.0.0.1:5000/upload`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e: AxiosError) => {
        console.error(e);
      });
  };

  return (
    <Box className="UploadPage">
      <Box className="Upload-Form">
        <input name="file" type="file" accept="image/*" onChange={onChangeFile} />
        <input type="text" value={text} onChange={onChangeText} />  {/* テキスト入力 */}
        <input type="button" disabled={!file} value="送信" onClick={onClickSubmit} />
      </Box>
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.UploadPage": {
    width: "100%",    
  },"Upload-Form":{

  }
};
