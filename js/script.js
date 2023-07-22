const backendUrl = "http://127.0.0.1:8000";
let selectImage = "target_image3.jpg";

// 物体検知を行う
const detect = async () => {
  const response = await axios.get(`${backendUrl}/detect?data=${selectImage}`);
  console.log("response", response);
};

// 画像一覧を取得する
const getImages = async () => {
  const response = await axios.get(`${backendUrl}/get-images`);

  return response.data;
};

// select要素が変更されたら実行
const handleChange = (obj) => {
  let idx = obj.selectedIndex;
  selectImage = obj.options[idx].value;
  console.log("select image", selectImage);
};

// 画像選択のselect要素をセットする
const setSelectElement = async () => {
  const selectElement = document.getElementById("select-image");

  const images = await getImages();

  // 配列の要素をselect要素に配置
  images.forEach((image) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = image;
    optionElement.value = image;
    selectElement.appendChild(optionElement);
  });

  selectImage = images[0];
};

// setSelectElement();
