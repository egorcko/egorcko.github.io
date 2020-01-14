<?php

/* https://api.telegram.org/bot469335754:AAEK6wyINxOLa3vVjagX_LuVdNUvMP0YgqI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['client_name'];
$phone = $_POST['client_phone'];
$technic = $_POST['tech'];
$token = "469335754:AAEK6wyINxOLa3vVjagX_LuVdNUvMP0YgqI";
$chat_id = "-298722128";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Техника:' => $technic
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>