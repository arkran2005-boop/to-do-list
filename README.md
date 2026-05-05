# To-do list

React + Vite приложение со списком задач, курсами валют и погодой.

## Локальный запуск

```bash
npm ci
npm run dev
```

## Проверка production-сборки

```bash
npm run build
npm run preview
```

## Публикация на GitHub Pages

В проект уже добавлен workflow `.github/workflows/deploy.yml`.

1. Создайте новый репозиторий на GitHub.
2. Загрузите этот проект в репозиторий и отправьте код в ветку `main`.
3. Откройте `Settings` → `Pages`.
4. В разделе `Build and deployment` выберите `Source: GitHub Actions`.
5. Откройте вкладку `Actions` и дождитесь успешного workflow `Deploy to GitHub Pages`.

После деплоя сайт будет доступен по адресу вида:

```text
https://USERNAME.github.io/REPOSITORY_NAME/
```

## Важно

- Приложение статическое, поэтому подходит для GitHub Pages без Docker и без backend-сервера.
- Задачи сохраняются в `localStorage` браузера.
- Для погоды браузер должен разрешить геолокацию.
- API-ключ OpenWeather находится во frontend-коде, поэтому он публичен. Для учебного проекта это допустимо, но для production лучше использовать backend/proxy.
