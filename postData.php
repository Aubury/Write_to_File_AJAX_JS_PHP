<?php
$file = 'file.txt';
// Открываем файл для получения существующего содержимого
$current = file_get_contents($file);
// Добавляем  в файл
$current .= $_POST['text'];
// Пишем содержимое обратно в файл
file_put_contents($file, $current);

?>