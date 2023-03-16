<?php
  // フォームの送信データを取得
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

  // メール送信処理
  $to = 'example@example.com'; // 送信先メールアドレスを指定
  $subject = 'お問い合わせがありました'; // メール件名を指定
  $body = "名前: $name\nメールアドレス: $email\n\n$message"; // メール本文を作成
  $headers = "From: $email"; // 送信元メールアドレスをヘッダに指定

  // メールを送信
    if (mail($to, $subject, $body, $headers)) {
    echo 'お問い合わせを受け付けました。';
    } else {
    echo '送信エラーが発生しました。';
    }
?>
