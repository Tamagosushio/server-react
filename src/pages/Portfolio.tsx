import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Portfolio() {
  const { isDarkMode } = useDarkMode();
  const cellStyle = {
    backgroundColor: isDarkMode ? "#171c20" : "#f8f9fa",
    color: isDarkMode ? "#fff" : "#000",
    transition: "background-color 0.3s, color 0.3s",
  };
  return (
    <div className="container mx-auto" style={{ maxWidth: "800px" }}>
      <h1 className="text-center">ポートフォリオ</h1>
      <p className="text-center">
        今まで作ったものたちを並べて置いておきます。
      </p>

      <h2>高専プロコン関連</h2>
      <p>第33回、第34回、第35回の競技部門に計3回出場しました。</p>
      <div>
        <h3>第33回</h3>
        <p>
          <a href="https://github.com/UScuber/procon33">https://github.com/UScuber/procon33</a><br/>
          ビジュアライザを作成しなかったため、通信機能の実装を担当しました。
        </p>
        <h3>第34回</h3>
        <p>
          <a href="https://github.com/UScuber/procon34">https://github.com/UScuber/procon34</a><br/>
          ビジュアライザと通信機能を担当しました。<br/>
          実際に行われた試合のリプレイも、<a href="/apps/procon34-visualizer-web/index.html">こちらのページ</a>で見ることができます。<br/>
          ローカル版で動かしたい方は、<a href="https://github.com/Tamagosushio/procon34-visualizer">こちらのレポジトリ</a>からダウンロードできます。<br/>
          プレイヤーからの入力を受け取る機構と、解を出す実行ファイルを繋げるのに苦労しました。<br/>
          これに加え、ターンごとの同期をとる必要もあったため非常に困難でした。
          <img src="/src/assets/portfolio/procon34.png" className="img-fluid d-block mx-auto my-3"/>
        </p>
        <h3>第35回</h3>
        <p>
          <a href="https://github.com/UScuber/procon35">https://github.com/UScuber/procon35</a><br/>
          同じくビジュアライザと通信機能を担当しました。<br/>
          去年と比べユーザーからの入力は、左下の8つ+右下の1つの計9つのみでしたが、描画に悩まされました。<br/>
          下の画像は決勝で行われた最大サイズの256×256=65536です。<br/>
          使用しているOpenSiv3Dフレームワークで、愚直に1pixelごとに四角形を描画すると非常に重たくなりました。<br/>
          そこで、盤面の情報を基に画像データを生成し、描画することで軽量化しました。
          <img src="/src/assets/portfolio/procon35.png" className="img-fluid d-block mx-auto my-3"/>
        </p>
      </div>

      <h2>過去のインターンシップ関連</h2>
      <div>
        <h3>しりとりWebアプリ</h3>
        <p>
          <a href="https://github.com/Tamagosushio/jigjp-internship-2024">https://github.com/Tamagosushio/jigjp-internship-2024</a><br/>
          株式会社jig.jp様のインターンシップに応募した際に作成した選考課題です。<br/>
          DenoとBulmaを使用して、楽にモダンなデザインにしました。
          <img src="/src/assets/portfolio/jigjp-intern.png" className="img-fluid d-block mx-auto my-3"/>
        </p>
        <h3>タイピングゲーム</h3>
        <p>
          <a href="https://github.com/jigintern/jigintern-2024-real-d">https://github.com/jigintern/jigintern-2024-real-d</a><br/>
          上記のインターンシップで、「さわやか」をお題に作成したWebアプリです。私はバックエンドを担当しました。<br/>
          <a href="https://mugen-hanabi-touch.deno.dev">こちらのDenoサーバー</a>からプレイすることができます。
          <img src="/src/assets/portfolio/jigjp-intern-d.png" className="img-fluid d-block mx-auto my-3"/>
        </p>
      </div>

      <h2>趣味</h2>
      <p>いろいろなことに手を出しています。</p>
      <div>
        <h3>コミックマーケット</h3>
        <p>
          2024年の冬コミ(C105)で技術同人誌を出版しました。<br/>
          電子版を<a href="https://muho.booth.pm/items/6511207">こちらのBoothページ</a>から購入できます。<br/>
          いただいたお金は全額絵師様に入ります。<br/>
          本のタイトル通り、discord.jsを使用してDiscordBotを作成する入門書です。<br/>
        </p>
        <h3>ホームページ</h3>
        <p>
          <a href="https://github.com/Tamagosushio/server-react">https://github.com/Tamagosushio/server-react</a><br/>
          このホームページです。今のところはpublicにしていますが、いつかprivateになるかもしれません。<br/>
        </p>
        <h3>自作言語</h3>
        <p>
          <a href="https://github.com/Tamagosushio/programlingvo">https://github.com/Tamagosushio/programlingvo</a><br/>
          <a href="/articles/myLanguage/programlingvo1">こちらのページ</a>で作成過程をまとめている、エスペラント語をベースとした自作プログラミング言語です。<br/>
          現在、かなり重大なバグが残っています……
        </p>
        <h3>PNGバイナリ</h3>
        <p>
          <a href="https://github.com/Tamagosushio/cpp-png-binary">https://github.com/Tamagosushio/cpp-png-binary</a><br/>
          PNGの画像ファイルをバイナリから読み込むことで、より高速な処理を目指す試みです。<br/>
          画像や処理によって結果は異なりますが、場合によってはC++のopencvより処理速度を2倍速くなることがありました。
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
