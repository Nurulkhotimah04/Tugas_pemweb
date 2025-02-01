<?php 
$host = 'localhost';
$dbname = 'dbCon.php';
$username = 'root';
$password = '';
$conn = mysqli_connect($host, $username ,$password ,$dbname );

if (!$conn) {
    die('Koneksi gagal:');
}
?>
