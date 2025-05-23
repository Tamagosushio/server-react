import React from "react";

function Apps() {
  return (
    <div className="container">
      <h1 className="text-center">アプリページ</h1>
      <p>
        作ったwebアプリを雑多に置きます。
      </p>
      <div>
        <h3>
          <a href="/apps/procon34-visualizer-web/index.html" className="text-decoration-none">
            第34回高専プロコン競技部門再現
          </a>
        </h3>
        <p>
          公式サイトで公開されている操作データを元に、実際の試合の様子を再現したものです。<br/>
        </p>
      </div>
      <div>
        <h3>
          <a href="/apps/programlingvo/index.html" className="text-decoration-none">
            自作言語「Programlingvo」のデモ
          </a>
        </h3>
        <p>
          <a href="/articles/myLanguage/programlingvo1" className="text-decoration-none">
            この自作言語を作る記事
          </a>で作成した言語をテストできます。<br/>
        </p>
      </div>
    </div>
  );
}

export default Apps;  // これを追加
