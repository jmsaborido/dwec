<?php
srand((float) microtime() * 1000000);
$numeroAleatorio = rand(0, 10);
sleep($numeroAleatorio % 3);
echo ($numeroAleatorio % 2 == 0) ? "Si" : "No";
