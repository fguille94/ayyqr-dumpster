<?php
    include_once('../etc/lib.php');
    addLog($connx, 'view', $_SESSION['userid']);
    header('Location: ../');
?>
