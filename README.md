# Modal
Скрипт создания модальных окон.
## Установка
1. Ваш HTML-файл должен содержать следующую структуру:
```HTML
    <button class="buttonCreate">Нажми меня</button>
    <div class="overlay">
        <div class="overlay__content">
            <div class="overlay__close">&times;</div>
        </div>
    </div>
```
2. CSS-файл должен иметь следующие стили :
```CSS
.overlay{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
}

.overlay__content{
    width: 600px;
    min-height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
}

.overlay__close{
    font-size: 50px;
    position: absolute;
    top: -19px;
    right: -41px;
    color: #fff;
    cursor: pointer;
}
```
3. Так же вы можете подключить прилагаемый CSS-файл в **<head>** перед Вашим файлом стилей:
```HTML
  <link rel="stylesheet" href="modal.css">
```
4. Перед Вашим скриптом подключите прилагаемый файл скрипта:
```HTML
  <script src="modal.js"></script>
```
 5. В вашем скрипт-файле вызовете функцию и передайте в нее аргументы:
 ```JS
createOverlay('.buttonCreate', '.overlay', '.overlay__close');  
```
  
  
