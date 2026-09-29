import type { MindmapSection } from "@/types/mindmap";

export const dlModelingMindmap: MindmapSection = {
  id: "dl-modeling",
  title: "딥러닝 모델링과 학습 (Step 3-B · TensorFlow Keras)",
  description: "Sequential 아키텍처, 출력층·컴파일 매핑, 콜백 설정, 훈련과 손실곡선 시각화",
  chart: `mindmap
  root((딥러닝 모델링과 학습))
    Sequential 모델 구성
      architectureBox["Sequential 아키텍처(실기)<br/>1) 입력층 — Input(shape=(n_features,)) 또는 첫 Dense에 input_shape 지정<br/>2) 은닉층 — Dense(64, activation='relu'), Dropout(0.2), BatchNormalization()<br/>3) 층을 리스트로 쌓아 models.Sequential([...]) 구성"]
      outputLayerBox["출력층과 활성화 손실함수 매핑(실기)<br/>1) 이진 분류 — Dense(1, activation='sigmoid'), loss='binary_crossentropy'<br/>2) 다중 분류(정수 라벨) — Dense(n_classes, activation='softmax'), loss='sparse_categorical_crossentropy'<br/>3) 다중 분류(원핫 라벨) — 동일 출력층, loss='categorical_crossentropy'<br/>4) 수치 회귀 — Dense(1, activation=None), loss='mse' 또는 'mae'"]
    컴파일과 학습
      compileBox["모델 컴파일(실기)<br/>1) optimizer='adam'<br/>2) loss — 출력층·문제 유형에 맞는 손실함수 매핑 준수<br/>3) metrics — 분류 ['accuracy'], 회귀 ['mae']"]
      callbackBox["콜백 설정(실기)<br/>1) EarlyStopping — monitor='val_loss', patience=5, restore_best_weights=True<br/>2) ModelCheckpoint — filepath 지정, save_best_only=True"]
      trainBox["모델 훈련과 손실곡선 시각화(실기)<br/>1) model.fit(X_train, y_train, epochs=30, batch_size=32, validation_data=(X_val, y_val), callbacks=[...])<br/>2) history.history['loss']와 ['val_loss']를 동일 꺾은선 그래프로 비교 시각화"]`,
};
