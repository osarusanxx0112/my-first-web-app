// ここからコードを書いてください
// js/tabs.js
export function setupTabs() {
  // HomeタブとコンバータータブのDOM要素を取得します
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');

  // 各セクションのDOM要素を取得します
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  // Homeタブがクリックされたときの処理を設定します
  homeLink.addEventListener("click", () => {
    // コンバーターセクションを非表示にし、Homeセクションを表示します
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  // コンバータータブがクリックされたときの処理を設定します
  converterTab.addEventListener("click", () => {
    // Homeセクションを非表示にし、コンバーターセクションを表示します
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}
