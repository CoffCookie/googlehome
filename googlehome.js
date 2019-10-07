//ライブラリ参照
var googlehome = require('./node_modules/google-home-notifier');
// 言語設定
var language = 'ja';
// GoogleHomeのIPアドレスに書き換えてください
googlehome.ip('0.0.0.0',language);
// 第一引数を自分のもっているGoogleHomeの名前に書き換えてください
//googlehome.device('googlehome', language);
// Google Homeにしゃべって欲しい文章をここに記入してください
var text = 'こんにちは';

// メイン処理
try {
  googlehome.notify(text, function(notifyRes) {
    console.log(notifyRes);
  });
} catch(err) {
  console.log(err);
};
