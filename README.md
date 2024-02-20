# AHC Output File Reader For All Browsers

## 概要
このUserScriptは、AtCoder Heuristic Contestのビジュアライザにおいて標準出力ファイルと標準エラー出力ファイルを自動的に読み込んで表示する機能を提供します。[以前作成したもの](https://github.com/qropa/marathon/tree/main/ahc)とは異なり、Braveなどのブラウザで動作することが確認されています。

## インストール
Tampermonkeyのようなユーザースクリプトマネージャーをインストールします。  
AHCOutputFileReaderAllBrowsers.jsをダウンロードします。  
ユーザースクリプトマネージャーにAHCOutputFileReaderAllBrowsers.jsをインストールします。  
## 使い方
AtCoder Heuristic ContestのWeb版ビジュアライザにアクセスします。  
上部にある「ファイルを選択」ボタンをクリックします。  
出力ファイル（例: 1.out）の保存先フォルダを選択します。  
フォルダーが選択されたら、seed値に応じて適切な出力が表示されます。  

## 注意事項
- このユーザースクリプトでは、デフォルトで出力ファイルの拡張子が `.out` 、エラー出力ファイルの拡張子が `.res` となっています。また、seed値がゼロ埋めされていないことを想定しています。必要に応じて、コード内のファイル名を変更してください。