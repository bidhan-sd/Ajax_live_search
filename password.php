<?php include 'inc/header.php'; ?>
<h2>Ajax : - Create A show password</h2>
<div class="content">
	<form action="" method="POST">
	<style>
		.skill{background: #fba991;margin-left:54px;padding:6px 30px;width:190px;}
		.skill ul{margin:0;padding:0;list-style:none;}
		.skill ul li{cursor:pointer;}
	</style>
		<table>
			<tr>
				<td>Username</td>
				<td>:</td>
				<td><input type="text" placeholder="Enter your username....."></td>
			</tr>
			<tr>
				<td>Skill</td>
				<td>:</td>
				<td><input type="password" name="password" id="password" placeholder="Enter password....."></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td>
					<button type="button" name="showpassword" id="showpassword">Show Password</button>
				</td>
			</tr>
		</table>
		<div id="statuspass"></div>
	</form>
</div>
<?php include 'inc/footer.php'; ?>