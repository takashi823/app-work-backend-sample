## アプリの説明

詳細はこちら↓
https://docs.google.com/presentation/d/10-roIdkKdkC8xS0aRDs7QOlm7C1e5mMe/edit#slide=id.p69


## 環境準備

ターミナルを開いて、下記手順を行ってください。
### backend
``````
cd backend
pipenv shell
pipenv install flask
pipenv install flask-sqlalchemy
pipenv install flask-cors
python3 
(pythonのインタプリンタが起動する)
>>> from main import app, db
>>> with app.app_context():
>>>     db.create_all()
>>>
>>>
>>> quit()
python3 main.py
（正常に起動しなければ問題あり）
```````


※ backend側とは別でターミナルを開き直してください
### frontend
`````
cd frontend
npm ci
npm start

※ app-workで行う際は、下記コマンドでaxiosを追加して行ってください。
npm install axios
``````




