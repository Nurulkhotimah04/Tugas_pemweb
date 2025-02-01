<?php
require 'dbCon.php';

$sql = "SELECT*FROM tb_pegawai";
$result = mysqli_query($conn, $sql); 

if(isset($POST['submit'])){
    $nip = $_POST['nip'];
    $nama = $_POST['nama'];
    $jabatan = $_POST['jabatan'];
    $email = $_POST['email'];
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

<h1>Menambah Data Pegawai</h1>
<form action="" method="post">
     <table border="1">
        <tr>
            <td><label for="nip">NIP</label></td>
            <td><input type="text" name="nim" require></td>
        </tr>
        <tr>
            <td><label for="nama">NAMA</label></td>
            <td><input type="text" name="nama" nip="nama" require></td>
        </tr>
        <tr>
            <td><label for="jabatan">JABATAN</label></td>
            <td><input type="jabatan" name="jabatan" require></td>
        </tr>
        <tr>
            <td><label for="email">Email</label></td>
            <td><input type="email" name="email" require></td>
        </tr>
        <tr>
            <td><button type="reset">reset</button></td>
            <td><button type="submit" name="submit">tambah data</button></td>
        </tr>
      
     </table>
</form>

    <h1>Daftar Pegawai</h1>
    <table border="1" cellpanding="10">
        <tr>
            <th>nim</th>
            <th>nama</th>
            <th>jabatan</th>
            <th>email</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)):?>
        <tr>
            <td><?= $row ['nip']; ?></td>
            <td><?= $row ['nama']; ?></td>
            <td><?= $row ['jabatan']; ?></td>
            <td><?= $row ['email']; ?></td>
            <td>
                <a href="delete.php?id=<?= $row ['id'];?>"
                onclick="return confirm('iya ta')">delete</a>            
                <a href="update.php?id=<?= $row ['id'];?>">update</a>

            </td>
        </tr>
    <?php endwhile; ?>
    </table>
</body>
</html>