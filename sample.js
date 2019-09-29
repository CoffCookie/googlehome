   //ライブラリ参照
   var googlehome = require('./node_modules/google-home-notifier');
   // 言語設定
   var language = 'ja';
   // GoogleHomeのIPアドレスに書き換えてくださいね
   googlehome.ip('0.0.0.0',language);
   // 第一引数を自分のもっているGoogleHomeの名前に書き換えてくださいね
   //googlehome.device('googlehome', language);
   // Google Homeにしゃべって欲しい文章をここに記入してくださいね
   var text = 'こんにちは';
   // メイン処理
   try {
   // 実行
   googlehome.notify(text, function(notifyRes) {
   // ログ出力
   console.log(notifyRes);
   });
   // エラー処理
   } catch(err) {
   // ログ出力
   console.log(err);
   };
