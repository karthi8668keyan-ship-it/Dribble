# Dribbble Clone – Django + Bootstrap 5

A simplified Dribbble landing-page clone built with **Django** and **Bootstrap 5**.

## Project Structure

```
Dribble/
├── dribbble_clone/        ← Django project (settings, urls)
├── shots/                 ← Django app
│   ├── templates/shots/index.html   ← Bootstrap 5 HTML
│   ├── static/shots/css/style.css   ← Custom CSS
│   └── static/shots/js/main.js      ← Custom JS
├── manage.py
└── requirements.txt
```

## Run Locally

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
# Open: http://127.0.0.1:8000/
```
