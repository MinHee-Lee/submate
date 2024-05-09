const express = require('express');
const mongoose = require('mongoose');   // mongoose 모듈 가져오기   
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();  // Express 앱 생성
const PORT = process.env.PORT || 5000;

// MongoDB 연결 mongodb+srv://minkong:<password>@cluster0.hbybjrg.mongodb.net/
mongoose.connect('mongodb+srv://minkong:Seraphicmin1!@cluster0.hbybjrg.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection; // 연결된 DB 사용 
db.on('error', console.error.bind(console, 'MongoDB 연결 오류:'));

// 사용자 스키마 정의
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 회원가입 엔드포인트
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 패스워드 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 데이터 생성
    const newUser = new User({ email, password: hashedPassword });

    // MongoDB에 사용자 데이터 저장
    await newUser.save();

    res.status(201).json({ message: '회원가입이 완료되었습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 오류' });
  }
});

// 로그인 엔드포인트
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 이메일로 사용자 조회
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: '유효하지 않은 이메일입니다.' });
    }

    // 비밀번호 확인
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: '비밀번호가 일치하지 않습니다.' });
    }

    // JWT 생성
    const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 오류' });
  }
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
