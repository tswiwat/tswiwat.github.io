# Python Freshmen Sandbox Portal 🎓💻

สื่อการเรียนการสอนเชิงโต้ตอบ (Interactive E-Learning Portal) วิชาการเขียนโปรแกรมคอมพิวเตอร์เบื้องต้น (Introduction to Computer Programming) ออกแบบขึ้นสำหรับนักศึกษาปริญญาตรี ชั้นปีที่ 1 โดดเด่นด้วยโทนสีฟ้า-ขาว สะอาดตา อ่านง่าย เป็นมิตรกับผู้ใช้งาน และสามารถทดลองเขียนโค้ดและรันดูผลลัพธ์ผ่านบราวเซอร์ได้ทันทีโดยไม่ต้องลงโปรแกรมเพิ่มเติม

---

## 🌟 ฟีเจอร์หลัก (Key Features)

1.  **อินเทอร์เฟซโทนสีฟ้า-ขาวระดับพรีเมียม (Premium Blue-White UI/UX):**
    *   ใช้ตัวแปร CSS System ในการคุมโทนสีเพื่อความสบายตาและดูเป็นทางการ
    *   Responsive Layout สมบูรณ์แบบ รองรับการแสดงผลทั้งบน Desktop, Tablet และ Mobile
    *   มีลูกเล่น Micro-animations, Hover Effects, และ transitions การเคลื่อนไหวที่ลื่นไหล
2.  **ตัวทดสอบเขียนโค้ดอินเตอร์แอคทีฟ (Live Code Sandbox):**
    *   ขับเคลื่อนด้วยเทคโนโลยี **Pyodide** (Python WebAssembly) รัน Python 3 สดๆ ในบราวเซอร์ฝั่ง Client
    *   มี Terminal Console แสดงผลการทำงานและดักจับข้อผิดพลาด (Syntax/Runtime Error) มาบอกผู้ใช้ทันที
    *   ผู้ใช้สามารถปรับแต่งโค้ดจากแบบฝึกหัดแล้วกดทดสอบ Run ได้อย่างอิสระ
3.  **แบบทดสอบหลังบทเรียนตามหลัก Bloom's Taxonomy:**
    *   **ระดับ 1: จำและเข้าใจ (Remember & Understand) ->** ปรนัยแบบเลือกตอบ (Multiple Choice)
    *   **ระดับ 2: ประยุกต์ใช้และวิเคราะห์ (Apply & Analyze) ->** ป้อนคำตอบทำนายผลการทำงานของโค้ด (Output Prediction)
    *   **ระดับ 3: ประเมินค่าและสร้างสรรค์ (Evaluate & Create) ->** ทำโจทย์ท้าทายการเขียนโค้ด โดยมีระบบส่งตรวจและรัน Test Cases อัตโนมัติ (Automated Code Grading)
4.  **ระบบบันทึกความก้าวหน้า (Progress Persistence):**
    *   ความก้าวหน้าการเรียนการสอน คะแนนแบบทดสอบ และดราฟต์โค้ดล่าสุดจะถูกจัดเก็บไว้ใน `localStorage` อัตโนมัติ ปิดหน้าเว็บแล้วกลับมาเรียนต่อจุดเดิมได้เสมอ

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

*   **HTML5 & CSS3 (Vanilla):** ควบคุมโครงสร้างและดีไซน์แบบยืดหยุ่นสูง ปราศจากเฟรมเวิร์กขนาดใหญ่เพื่อการดาวน์โหลดที่รวดเร็ว
*   **JavaScript (ES6):** ควบคุมตรรกะระบบ (SPA Navigation, State Management, Quiz Checking)
*   **Pyodide v0.26.1:** ตัวแปลภาษา Python 3 บนเว็บบราวเซอร์ผ่าน WebAssembly
*   **Prism.js:** ตัวสร้าง Syntax Highlighting ให้กับกล่องโค้ดดูสวยงามเหมือนใช้ IDE จริง
*   **Google Fonts:** Sarabun (ไทย) & JetBrains Mono (โค้ดภาษาอังกฤษ)
*   **FontAwesome v6.4.0:** ชุดไอคอนแสดงผลคุณภาพสูง

---

## 📂 โครงสร้างโฟลเดอร์ (Folder Structure)

```
learnGit2/
│
├── index.html       # หน้าโครงสร้างเว็บหลักและส่วนแสดงผล UI
├── styles.css       # กำหนดดีไซน์สไตล์ชีท ธีมสีฟ้าขาว และแอนิเมชัน
├── content.js       # ฐานข้อมูลเนื้อหาบทเรียน ตัวอย่างโค้ด และคำถามแบบทดสอบ
├── app.js           # ตัวขับเคลื่อนระบบ (SPA, Pyodide Runner, Quiz Grader, LocalStorage)
└── README.md        # รายละเอียดและวิธีนำระบบขึ้นเผยแพร่
```

---

## 🚀 ขั้นตอนการจัดส่งเผยแพร่บน GitHub Pages (Deployment Guide)

เนื่องจากเว็บนี้เป็น Static Web (HTML/CSS/JS) จึงสามารถเปิดใช้บริการฟรีผ่าน **GitHub Pages** ได้ทันทีโดยไม่ต้องทำการรัน Build ใดๆ ทั้งสิ้น:

### 1. การคอมมิตโค้ดและเตรียมความพร้อม
เปิดโปรแกรม Git Bash หรือ Terminal ภายในคอมพิวเตอร์ของคุณแล้วทำตามคำสั่งเหล่านี้ทีละบรรทัด:

```bash
# 1. จัดเตรียมเพิ่มไฟล์ทั้งหมดเข้าสู่การติดตามของ Git
git add .

# 2. บันทึกประวัติการพัฒนาพร้อมคอมมิตข้อความอธิบาย
git commit -m "Initial commit: educational website with Pyodide sandbox and Bloom quizzes"

# 3. ส่งไฟล์ขึ้นไปยัง repository ปลายทางที่ตั้งค่าไว้
git push -u origin main
```

### 2. เปิดใช้งานบริการ GitHub Pages
เมื่อการ Push โค้ดเสร็จสิ้น ให้ดำเนินการต่อบนหน้าเว็บไซต์ GitHub ดังนี้:
1.  เข้าไปที่ Repository ของคุณบน GitHub (`https://github.com/tswiwat/tswiwat.github.io`)
2.  คลิกที่แถบเมนู **Settings** (รูปฟันเฟืองด้านบนขวา)
3.  ในแถบเมนูด้านซ้าย ให้คลิกเลือกหัวข้อ **Pages** (ภายใต้หมวด Code and automation)
4.  ในส่วนของ **Build and deployment**:
    *   หัวข้อ **Source** ให้เลือกเป็น `Deploy from a branch`
    *   หัวข้อ **Branch** ให้เลือกกิ่งเป็น `main` (หรือกิ่งหลักของคุณ) และเลือกโฟลเดอร์ปลายทางเป็น `/ (root)`
5.  กดปุ่ม **Save**
6.  รอประมาณ 1-2 นาที GitHub จะดำเนินการ Deploy ให้เสร็จสิ้น และคุณจะสามารถเข้าชมเว็บไซต์ของคุณได้ที่ลิงก์:
    👉 **[https://tswiwat.github.io/](https://tswiwat.github.io/)**
