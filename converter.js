// ここからコードを書いてください
// js/converter.js
export function setupConverter() {
  // 単位変換フォーム全体を取得します
  const converterForm = document.querySelector(".converter-form");

  // 入力フィールド（変換したい値）を取得します
  const inputValue = document.querySelector(".converter-input");

  // 変換元の単位を選択するドロップダウンを取得します
  const fromUnit = document.querySelector(".converter-from");

  // 変換先の単位を選択するドロップダウンを取得します
  const toUnit = document.querySelector(".converter-to");

  // 変換結果を表示する要素を取得します
  const result = document.querySelector(".converter-result");

  // ここに単位の定義と変換ロジックを追加していきます
  // js/converter.js
  // ... (前のコード)

  // 長さの単位とその基準値（メートルを1とした場合の比率）を定義します
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  // 変換元と変換先のドロップダウンリストを空にします
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  // 定義した単位をドロップダウンリストに追加します
  for (const unit of lengthUnit) {
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // ドロップダウンリストの初期選択を設定します
  // 変換元を最初のオプション（meter）に設定
  if (fromUnit.options.length > 0) {
    fromUnit.selectedIndex = 0;
  }
  // 変換先を2番目のオプション（kilometer）に設定
  if (toUnit.options.length > 0) {
    toUnit.selectedIndex = 1;
  }

  // ここに変換ロジックとイベントリスナーを追加していきます
  // js/converter.js
  // ... (前のコード)

  // 変換を実行する関数を定義します
  function convert() {
    // 入力された値を取得し、数値に変換します
    const value = parseFloat(inputValue.value);

    // 数値でない場合はエラーメッセージを表示して処理を中断します
    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return;
    }

    // 変換元の単位の基準値と変換先の単位の基準値を取得します
    const fromBase = fromUnit.value;
    const toBase = toUnit.value;

    // 単位変換の計算を行います
    // 例: 1000メートルをキロメートルに変換する場合
    // (1000 * 1) / 1000 = 1キロメートル
    const converted = (value * fromBase) / toBase;

    // 結果を3桁まで丸めて表示します
    // 例: 1000 meter = 1.000 kilometer
    result.textContent = `${value} ${
      lengthUnit[fromUnit.selectedIndex].name
    } = ${converted.toFixed(3)} ${lengthUnit[toUnit.selectedIndex].name}`;
  }

  // フォームの入力（値の変更や選択）があったときに変換関数を実行するようにします
  converterForm.addEventListener("input", convert);

  // ページ読み込み時に初期値で一度変換を実行します
  convert();
}
