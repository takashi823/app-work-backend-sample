import { Box, SxProps, Theme, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

type taskProps = {
  id: number;
  task_name: string;
  task_detail: string;
};

export const MainContent = () => {
  const [taskData, setTaskData] = useState<taskProps[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskDetail, setTaskDetail] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/tasks");
      const data = response.data;
      setTaskData(data);
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(taskData);
  }, [taskData]);

  const createTask = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/tasks", {
        task_name: taskName,
        task_detail: taskDetail,
      });
      // データが追加されたら再取得
      if (response.status === 201) {
        fetchData();
      }
    } catch (error) {
      console.error("データの作成に失敗しました:", error);
    }
  };

  return (
    <Box className="MainContent" sx={sx}>
      <Box component="form" className="MainContent-Form" onSubmit={createTask}>
        <Box>タスク名</Box>
        <TextField
          placeholder="タスクを入力してください"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Box>詳細</Box>
        <TextField
          multiline
          rows={4}
          placeholder="詳細を入力してください"
          value={taskDetail}
          onChange={(e) => setTaskDetail(e.target.value)}
        />
        <Button type="submit" variant="contained" className="MainContent-Form-Button">
          登録
        </Button>
      </Box>
      {taskData.map((task: taskProps) => (
        <Box className="MainContent-Tasklist">
          <Box key={task.id}>
            <Box className="MainContent-Tasklist-Task">○ {task.task_name}</Box>
            <Box className="MainContent-Tasklist-Detail">詳細：{task.task_detail}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.MainContent": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    flexDirection: "column",
  },
  ".MainContent-Form": {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    gap: "20px",
    fontSize: "24px",
  },
  ".MainContent-Form-Button": {
    width: "200px",
    fontSize: "24px",
  },
  ".MainContent-Tasklist": {
    width: "50%",
    fontSize: "20px",
    margin: "30px auto 0",
  },
  ".MainContent-Tasklist-Task": {
    fontWeight: "bold",
  },
};
