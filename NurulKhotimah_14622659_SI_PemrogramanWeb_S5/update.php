<?php
require 'dbCon.php';
$id = $_GET ['id'];
$sql = "SELECT * FROM tb_pegawai where id=$id";
$result = mysqli_query($conn, $sql); 
$row = mysqli_fetch_assoc($result);

 
if (isset($_POST['submit'])) {
    $nim = $_POST['nip'];
    $nama = $_POST['name'];
    $nama = $_POST['jabtan'];
    $email = $_POST['email'];

    
    $query = "UPDATE tb_pegawai set  nim='$nim', nama='$nama', jabatan='$jabatan', email='$email'
     where id=$id"; 
    mysqli_query($conn, $query); 
    header("Location: index.php"); 
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud Pegawai</title>
</head>
<body>
    <h1>update data pegawai</h1>
<form action="" method="post">
     <table border="1">
        <tr>
            <td><label for="nip">nip</label></td>
            <td><input type="text" name="nip" VALUES="<?= $row['nip'];?>" require></td>
        </tr>
        <tr>
            <td><label for="name">name</label></td>
            <td><input type="text" name="nama" VALUES="<?= $row['nama'];?>" require></td>
        </tr>
        <tr>
            <td><label for="name">jabatan</label></td>
            <td><input type="text" name="nama" VALUES="<?= $row['jabatan'];?>" require></td>
        </tr>
        <tr>
            <td><label for="email">email</label></td>
            <td><input type="email" name="email" VALUES="<?= $row['email'];?>" id="email" require></td>
        </tr>
        <tr>
            <td><button type="submit" name="submit">update data</button></td>
        </tr>
      
     </table>
</form>
</body>
</html>