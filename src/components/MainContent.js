import React from 'react';

function MainContent() {
  return (
    <main>
      <h2>作業内容</h2>
      <ul>
        <li>○○について調査</li>
        <li>△△の設計</li>
        <li>□□の実装</li>
      </ul>

      <h2>本日の学び</h2>
      <p>○○について理解を深めることができた。</p>

      <h2>明日の予定</h2>
      <ul>
        <li>△△の設計を引き続き行う</li>
        <li>□□の実装に着手する</li>
      </ul>
    </main>
  );
}

export default MainContent;