import React from "react";

function Apps() {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center">アプリページ</h1>
      <p>
        作ったwebアプリを雑多に置きます。
      </p>
      <h3>
        <a href="/apps/procon34-visualizer-web/index.html" className="text-decoration-none">
          第34回高専プロコン競技部門再現
        </a>
      </h3>
      <p>
        公式サイトで公開されている操作データを元に、実際の試合の様子を再現したものです。<br/>

      </p>
    </div>
  );
}

export default Apps;  // これを追加
