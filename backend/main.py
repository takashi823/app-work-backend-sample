from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import datetime
import json

# Flaskのインスタンスを作成
app = Flask(__name__)

# CORSを有効にする（これがないとfrontからアクセスできない）
CORS(app)

# DBの設定
# DB名:sqlite:///[DB名]で指定する
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///sample.db"
db = SQLAlchemy(app)

# モデルの定義（テーブルと1対1で紐付くclassの作成）
class Task(db.Model):
    __tablename__ = "Task"
    id = db.Column(db.Integer, primary_key=True)
    task_name = db.Column(db.String(50), nullable=False)
    task_detail = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)

    def serialize(self):
        # オブジェクトの属性を適切な JSON 形式に変換する処理を記述
        return {
            "id": self.id,
            "task_name": self.task_name,
            "task_detail": self.task_detail
        }

# ルーティングの定義(URLと処理の関連付け)
# '/'のURLにアクセスがあったらhello関数を実行
@app.route("/tasks", methods=["GET", "POST"])
def post_task():
    if request.method == "GET":
        tasks = Task.query.all()
        task_list = [task.serialize() for task in tasks]
        return jsonify(task_list)
    elif request.method == "POST":
        result = request.get_json()
        print(result)
        task = Task(task_name=result["task_name"], task_detail=result["task_detail"])
        db.session.add(task)
        db.session.commit()
        return redirect("/tasks")

if __name__ == "__main__":
    app.run()
