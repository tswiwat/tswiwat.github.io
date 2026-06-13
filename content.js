const courseContent = {
  title: "สื่อการเรียนการสอน: การเขียนโปรแกรมคอมพิวเตอร์เบื้องต้น (Introduction to Programming)",
  description: "บทเรียนออนไลน์เชิงโต้ตอบสำหรับนักศึกษาชั้นปีที่ 1 ครอบคลุมพื้นฐานการเขียนโปรแกรมด้วยภาษา Python พร้อมตัวทดสอบรันโค้ดและแบบประเมินผลตาม Bloom's Taxonomy",
  modules: [
    {
      id: "module1",
      title: "1. พื้นฐานและโครงสร้างควบคุม (Basic & Control Structures)",
      lessons: [
        {
          id: "m1_1_variables",
          title: "ตัวแปรและชนิดข้อมูล (Variables & Data Types)",
          content: `
            <h3>ตัวแปรและชนิดข้อมูล (Variables & Data Types)</h3>
            <p>ในการเขียนโปรแกรม <strong>ตัวแปร (Variable)</strong> เปรียบเสมือนกล่องหรือภาชนะที่เราสร้างขึ้นเพื่อเก็บข้อมูลไว้ในหน่วยความจำของคอมพิวเตอร์ เพื่อนำข้อมูลนั้นมาใช้งานหรือคำนวณในภายหลัง</p>
            
            <h4>1. การประกาศตัวแปร (Variables Assignment)</h4>
            <p>ภาษา Python มีความง่ายในการใช้งานมากเมื่อเทียบกับภาษาอื่น เนื่องจากเราไม่ต้องกำหนดชนิดข้อมูลของตัวแปรล่วงหน้า (Dynamic Typing) ระบบจะพิจารณาชนิดข้อมูลให้โดยอัตโนมัติจากค่าที่เรากำหนดให้กับตัวแปร โดยใช้ตัวดำเนินการ <code>=</code></p>
            <pre><code class="language-python"># รูปแบบ: ชื่อตัวแปร = ค่าของข้อมูล
student_name = "สมชาย ใจดี"  # ตัวแปรเก็บข้อความ
age = 19                   # ตัวแปรเก็บจำนวนเต็ม
gpa = 3.45                 # ตัวแปรเก็บทศนิยม</code></pre>

            <h4>2. กฎการตั้งชื่อตัวแปรใน Python</h4>
            <ul>
              <li>ต้องเริ่มต้นด้วยตัวอักษรภาษาอังกฤษ (a-z, A-Z) หรือเครื่องหมายขีดล่าง (underscore: <code>_</code>) เท่านั้น</li>
              <li>ห้ามเริ่มต้นด้วยตัวเลข (เช่น <code>1st_score</code> ใช้ไม่ได้ แต่ <code>score_1st</code> ใช้ได้)</li>
              <li>ประกอบด้วยตัวอักษร ตัวเลข และเครื่องหมาย <code>_</code> เท่านั้น (ห้ามมีช่องว่าง หรือสัญลักษณ์พิเศษ เช่น <code>@</code>, <code>#</code>, <code>$</code>)</li>
              <li>ตัวอักษรพิมพ์เล็กและพิมพ์ใหญ่มีความแตกต่างกัน (Case-Sensitive) เช่น <code>Age</code> และ <code>age</code> ถือเป็นคนละตัวแปร</li>
              <li>ห้ามตั้งชื่อซ้ำกับ <strong>คำสงวน (Reserved Words)</strong> ของ Python เช่น <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>def</code>, <code>import</code> เป็นต้น</li>
            </ul>

            <h4>3. ชนิดข้อมูลพื้นฐาน (Basic Data Types)</h4>
            <table class="content-table">
              <thead>
                <tr>
                  <th>ชนิดข้อมูล</th>
                  <th>คำย่อ</th>
                  <th>คำอธิบาย</th>
                  <th>ตัวอย่างการเขียน</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>จำนวนเต็ม (Integer)</td>
                  <td><code>int</code></td>
                  <td>ตัวเลขที่ไม่มีทศนิยม ทั้งค่าบวก ศูนย์ และค่าลบ</td>
                  <td><code>x = 100</code>, <code>y = -5</code></td>
                </tr>
                <tr>
                  <td>จำนวนจริง/ทศนิยม (Float)</td>
                  <td><code>float</code></td>
                  <td>ตัวเลขที่มีทศนิยมหรือในรูปสัญกรณ์วิทยาศาสตร์</td>
                  <td><code>pi = 3.14159</code>, <code>temp = -1.5</code></td>
                </tr>
                <tr>
                  <td>ข้อความ (String)</td>
                  <td><code>str</code></td>
                  <td>ตัวอักษรหรือข้อความที่ครอบด้วยเครื่องหมายอัญประกาศเดี่ยว (<code>'</code>) หรืออัญประกาศคู่ (<code>"</code>)</td>
                  <td><code>city = "Bangkok"</code>, <code>code = 'PY101'</code></td>
                </tr>
                <tr>
                  <td>ค่าความจริง (Boolean)</td>
                  <td><code>bool</code></td>
                  <td>เก็บค่าความจริง มีเพียง 2 ค่าคือ จริง (<code>True</code>) หรือ เท็จ (<code>False</code>)</td>
                  <td><code>is_passed = True</code></td>
                </tr>
              </tbody>
            </table>

            <div class="note-box info">
              <strong>💡 ข้อแนะนำสำหรับนักศึกษาปี 1:</strong> เราสามารถตรวจสอบชนิดข้อมูลของตัวแปรได้ตลอดเวลาโดยใช้ฟังก์ชัน <code>type(ชื่อตัวแปร)</code> เช่น <code>print(type(age))</code>
            </div>
          `,
          playgroundCode: `# ลองรันโค้ดและสังเกตผลลัพธ์การทำงาน
name = "ปิยะภัทร"
age = 18
weight = 65.5
is_freshman = True

print("ข้อมูลของนักศึกษา:")
print("ชื่อ:", name, "-> ชนิดข้อมูล:", type(name))
print("อายุ:", age, "ปี -> ชนิดข้อมูล:", type(age))
print("น้ำหนัก:", weight, "กก. -> ชนิดข้อมูล:", type(weight))
print("เป็นนักศึกษาปี 1 หรือไม่?:", is_freshman, "-> ชนิดข้อมูล:", type(is_freshman))
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "ตัวเลือกใดต่อไปนี้คือการตั้งชื่อตัวแปรที่ **ไม่ถูกต้อง** ตามหลักไวยากรณ์ภาษา Python?",
              options: [
                "student_id = '66010999'",
                "_totalScore = 95.5",
                "2nd_project = 'Website'",
                "print_value = True"
              ],
              answer: 2,
              explanation: "2nd_project ตั้งชื่อขึ้นต้นด้วยตัวเลข (เลข 2) ซึ่งผิดกฎการตั้งชื่อตัวแปรของ Python ที่ห้ามใช้ตัวเลขเป็นอักขระแรกสุด"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "พิจารณาโค้ดด้านล่างนี้ เมื่อรันโปรแกรมแล้ว ผลลัพธ์จากการ print(type(a)) จะแสดงเป็นชนิดข้อมูลใด?",
              code: `a = "123.45"
print(type(a))`,
              answer: "<class 'str'>",
              explanation: "เนื่องจากค่า 123.45 ถูกครอบด้วยเครื่องหมายอัญประกาศคู่ \"...\" ทำให้ Python มองว่าข้อมูลนี้เป็นข้อความ (String หรือ str) ไม่ใช่ทศนิยม (float)"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงเขียนโปรแกรมประกาศตัวแปร 3 ตัว ดังนี้:<br>1. <code>title</code> เก็บข้อความว่า 'Python Programming'<br>2. <code>version</code> เก็บจำนวนเต็มเท่ากับ 3<br>3. <code>is_active</code> เก็บค่าความจริง True จากนั้นให้สั่ง <code>print</code> ตัวแปรทั้ง 3 ออกมาเรียงตามลำดับ",
              initialCode: `# ประกาศตัวแปรที่นี่

# แสดงผลค่าของตัวแปรเรียงลำดับ
`,
              testCode: `
# ตรวจสอบตัวแปร
try:
    assert 'title' in locals(), "ยังไม่ได้ประกาศตัวแปร 'title'"
    assert title == 'Python Programming', "ตัวแปร 'title' ต้องมีค่าเท่ากับ 'Python Programming'"
    assert 'version' in locals(), "ยังไม่ได้ประกาศตัวแปร 'version'"
    assert version == 3, "ตัวแปร 'version' ต้องมีค่าเท่ากับ 3"
    assert 'is_active' in locals(), "ยังไม่ได้ประกาศตัวแปร 'is_active'"
    assert is_active == True, "ตัวแปร 'is_active' ต้องมีค่าเท่ากับ True"
    print("SUCCESS: ประกาศตัวแปรและตั้งค่าถูกต้องทั้งหมด!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        },
        {
          id: "m1_2_operators",
          title: "ตัวดำเนินการ (Operators)",
          content: `
            <h3>ตัวดำเนินการ (Operators)</h3>
            <p>ตัวดำเนินการเปรียบเสมือนสัญลักษณ์ที่ใช้สั่งให้คอมพิวเตอร์ทำการประมวลผลข้อมูล ไม่ว่าจะเป็นการคำนวณทางคณิตศาสตร์ หรือการเปรียบเทียบในทางตรรกศาสตร์</p>
            
            <h4>1. ตัวดำเนินการคณิตศาสตร์ (Arithmetic Operators)</h4>
            <p>ใช้ในการคำนวณตัวเลขพื้นฐาน:</p>
            <table class="content-table">
              <thead>
                <tr>
                  <th>เครื่องหมาย</th>
                  <th>ความหมาย</th>
                  <th>ตัวอย่างการคำนวณ</th>
                  <th>ผลลัพธ์</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>+</code></td>
                  <td>การบวก (Addition)</td>
                  <td><code>10 + 5</code></td>
                  <td><code>15</code></td>
                </tr>
                <tr>
                  <td><code>-</code></td>
                  <td>การลบ (Subtraction)</td>
                  <td><code>10 - 5</code></td>
                  <td><code>5</code></td>
                </tr>
                <tr>
                  <td><code>*</code></td>
                  <td>การคูณ (Multiplication)</td>
                  <td><code>10 * 5</code></td>
                  <td><code>50</code></td>
                </tr>
                <tr>
                  <td><code>/</code></td>
                  <td>การหาร (Division) - ได้ทศนิยมเสมอ</td>
                  <td><code>10 / 4</code></td>
                  <td><code>2.5</code></td>
                </tr>
                <tr>
                  <td><code>//</code></td>
                  <td>การหารปัดเศษทิ้ง (Floor Division)</td>
                  <td><code>10 // 4</code></td>
                  <td><code>2</code></td>
                </tr>
                <tr>
                  <td><code>%</code></td>
                  <td>การหารเอาเศษ / มอดุโล (Modulo)</td>
                  <td><code>10 % 3</code></td>
                  <td><code>1</code></td>
                </tr>
                <tr>
                  <td><code>**</code></td>
                  <td>ยกกำลัง (Exponentiation)</td>
                  <td><code>2 ** 3</code></td>
                  <td><code>8</code></td>
                </tr>
              </tbody>
            </table>

            <h4>2. ตัวดำเนินการเปรียบเทียบและตรรกศาสตร์ (Comparison & Logical Operators)</h4>
            <p>ใช้ในการตรวจสอบความสัมพันธ์ของข้อมูล ซึ่งจะได้ผลลัพธ์เป็นค่าทางบูลีน (<code>True</code> หรือ <code>False</code>)</p>
            
            <h5>ตัวดำเนินการเปรียบเทียบ (Comparison Operators):</h5>
            <ul>
              <li><code>==</code> : เท่ากับ (ตรวจสอบความเท่ากัน เช่น <code>5 == 5</code> ได้ <code>True</code>)</li>
              <li><code>!=</code> : ไม่เท่ากับ (เช่น <code>5 != 3</code> ได้ <code>True</code>)</li>
              <li><code>&gt;</code>, <code>&lt;</code> : มากกว่า, น้อยกว่า (เช่น <code>10 &gt; 3</code> ได้ <code>True</code>)</li>
              <li><code>&gt;=</code>, <code>&lt;=</code> : มากกว่าหรือเท่ากับ, น้อยกว่าหรือเท่ากับ</li>
            </ul>

            <h5>ตัวดำเนินการตรรกศาสตร์ (Logical Operators):</h5>
            <ul>
              <li><code>and</code> (และ): เป็น <code>True</code> เมื่อเงื่อนไขทั้งสองฝั่งเป็นจริงทั้งหมด (เช่น <code>True and False</code> ได้ <code>False</code>)</li>
              <li><code>or</code> (หรือ): เป็น <code>True</code> เมื่อมีเงื่อนไขอย่างน้อยหนึ่งฝั่งเป็นจริง (เช่น <code>True or False</code> ได้ <code>True</code>)</li>
              <li><code>not</code> (ไม่/ปฏิเสธ): สลับค่าความจริงตรงกันข้าม (เช่น <code>not True</code> ได้ <code>False</code>)</li>
            </ul>

            <div class="note-box warning">
              <strong>⚠️ ระวังสับสน:</strong> เครื่องหมาย <code>=</code> ใช้สำหรับกำหนดค่าให้ตัวแปร (Assignment) แต่เครื่องหมาย <code>==</code> ใช้สำหรับตรวจสอบความเท่ากันในการเปรียบเทียบ
            </div>
          `,
          playgroundCode: `# ทดลองคำนวณทางคณิตศาสตร์และตรรกศาสตร์
x = 17
y = 5

print("ผลหารปกติ x / y =", x / y)
print("ผลหารปัดเศษ x // y =", x // y)
print("เศษเหลือจากการหาร x % y =", x % y)

# เปรียบเทียบตรรกศาสตร์
is_even = (x % 2 == 0)
print("x เป็นเลขคู่หรือไม่?:", is_even)

check = (x > 10) and (y < 10)
print("x มากกว่า 10 และ y น้อยกว่า 10 หรือไม่?:", check)
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "หากต้องการทราบเศษเหลือจากการหารเลข 17 ด้วย 3 ควรใช้คำสั่งการทำงานข้อใด?",
              options: [
                "17 / 3",
                "17 // 3",
                "17 % 3",
                "17 ** 3"
              ],
              answer: 2,
              explanation: "เครื่องหมาย % (Modulo) คือตัวดำเนินการเพื่อหาเศษเหลือของการหาร ดังนั้น 17 % 3 จะได้ผลลัพธ์เป็น 2 (เพราะ 3 * 5 = 15 เศษ 2)"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "โค้ดต่อไปนี้จะแสดงผลลัพธ์หน้าจอว่าอย่างไร?",
              code: `a = 10
b = 3
result = (a > b) and (a % b == 1)
print(result)`,
              answer: "True",
              explanation: "1. a > b คือ 10 > 3 ซึ่งเป็น True\n2. a % b คือ 10 % 3 ซึ่งได้เศษ 1 ดังนั้น 1 == 1 จึงเป็น True\n3. True and True มีผลลัพธ์เป็น True"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงสร้างตัวแปรชื่อ <code>fahrenheit</code> กำหนดค่าเริ่มต้นเป็น <code>104</code> จากนั้นแปลงเป็นองศาเซลเซียสและเก็บในตัวแปรชื่อ <code>celsius</code> โดยใช้สูตร:<br><strong>Celsius = (Fahrenheit - 32) * 5 / 9</strong>",
              initialCode: `fahrenheit = 104

# เขียนสมการคำนวณแปลงค่าเซลเซียสที่นี่
celsius = 
`,
              testCode: `
try:
    assert 'fahrenheit' in locals(), "ห้ามลบตัวแปร fahrenheit"
    assert 'celsius' in locals(), "ยังไม่ได้สร้างตัวแปร celsius"
    assert celsius == 40.0, f"การคำนวณไม่ถูกต้อง ค่าที่ได้คือ {celsius} แต่ค่าที่ถูกคือ 40.0"
    print("SUCCESS: แปลงอุณหภูมิถูกต้อง!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        },
        {
          id: "m1_3_conditionals",
          title: "คำสั่งเงื่อนไข (Conditionals - if, elif, else)",
          content: `
            <h3>คำสั่งเงื่อนไข (Conditionals: if, elif, else)</h3>
            <p>ในการแก้ปัญหาจริง โปรแกรมจำเป็นต้องมีทางเลือกในการทำงานตามเงื่อนไขที่กำหนด ภาษา Python ใช้บล็อกคำสั่ง <code>if</code>, <code>elif</code>, และ <code>else</code> เพื่อตัดสินใจเลือกเส้นทางทำงาน</p>
            
            <h4>1. โครงสร้างคำสั่งเงื่อนไข</h4>
            <p>ไวยากรณ์พื้นฐานมีความสำคัญมาก สังเกตการใช้เครื่องหมายทวิภาค <code>:</code> (colon) ท้ายเงื่อนไข และ<strong>การย่อหน้า (Indentation)</strong> ซึ่งปกติจะกด Spacebar 4 ครั้ง หรือกด Tab เพื่อบอก Python ว่าชุดคำสั่งใดอยู่ภายใต้เงื่อนไขนั้นๆ</p>
            
            <pre><code class="language-python">if เงื่อนไข_1:
    # คำสั่งที่จะทำงานเมื่อ เงื่อนไข_1 เป็น True
elif เงื่อนไข_2:
    # คำสั่งที่จะทำงานเมื่อ เงื่อนไข_1 เป็น False แต่ เงื่อนไข_2 เป็น True
else:
    # คำสั่งที่จะทำงานเมื่อเงื่อนไขทั้งหมดก่อนหน้าเป็น False</code></pre>

            <h4>2. ข้อควรระวังและหลักสำคัญ</h4>
            <ul>
              <li><strong>Indentation (การเยื้องหน้ากระดาษ):</strong> Python ไม่ได้ใช้เครื่องหมายปีกกา <code>{}</code> เหมือนภาษา C/C++ หรือ Java แต่ใช้ช่องว่างในการแบ่งขอบเขตบล็อกโค้ด หากย่อหน้าไม่ตรงกันจะเกิดข้อผิดพลาด <code>IndentationError</code></li>
              <li>เงื่อนไขที่จะนำมาใส่หลัง <code>if</code> หรือ <code>elif</code> จะต้องส่งกลับค่าเป็น Boolean (<code>True</code> หรือ <code>False</code>) เสมอ</li>
              <li><code>elif</code> (ย่อมาจาก else if) สามารถมีได้หลายตัวในโครงสร้างเดียว หรือจะไม่มีเลยก็ได้ และ <code>else</code> จะมีได้เพียงแค่ตัวเดียวอยู่ท้ายสุดเสมอ</li>
            </ul>
          `,
          playgroundCode: `# ลองเปลี่ยนคะแนนของ score แล้วสังเกตการแบ่งเกรด
score = 74

if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
elif score >= 50:
    grade = "D"
else:
    grade = "F"

print("คะแนน:", score, "เกรดที่ได้:", grade)
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "ในภาษา Python การสิ้นสุดบรรทัดเงื่อนไขของ if/elif/else และการแบ่งบล็อกคำสั่งใช้สิ่งใดควบคุม?",
              options: [
                "จบด้วยเครื่องหมายเซมิโคลอน (;) และกำหนดบล็อกด้วยเครื่องหมายปีกกา {}",
                "จบด้วยเครื่องหมายโคลอน (:) และใช้การย่อหน้า (Indentation)",
                "ใช้คำสั่ง block และ end_block ครอบคำสั่ง",
                "ใช้คำว่า then ด้านหลังเงื่อนไขและมีคำสั่ง end ด้านหลังสุด"
              ],
              answer: 1,
              explanation: "Python ใช้เครื่องหมายโคลอน (:) ที่จุดสิ้นสุดเงื่อนไข และระบุความกว้างขอบเขตของโค้ดบล็อกด้วยการย่อหน้า (Indentation)"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "ผลลัพธ์ของโค้ดต่อไปนี้จะแสดงผลทางหน้าจออย่างไร?",
              code: `x = 15
if x > 10:
    if x % 2 == 0:
        print("A")
    else:
        print("B")
else:
    print("C")`,
              answer: "B",
              explanation: "1. ตรวจสอบเงื่อนไขแรก x > 10 (15 > 10) ซึ่งเป็น True จึงเข้ามาด้านใน\n2. ตรวจสอบเงื่อนไขถัดมา x % 2 == 0 (15 % 2 == 0) ซึ่งเป็น False (เพราะเหลือเศษ 1) จึงไปทำงานในฝั่ง else ด้านในนั่นคือ print('B')"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงเขียนโปรแกรมตรวจสอบราคาค่าผ่านประตูสวนสนุกตามช่วงอายุ โดยกำหนดเงื่อนไขดังนี้:<br>1. ถ้าอายุ (<code>age</code>) น้อยกว่าหรือเท่ากับ 12 ปี ให้ราคาค่าผ่านประตู (<code>price</code>) เท่ากับ 100 บาท<br>2. ถ้าอายุมากกว่า 12 ปี แต่ไม่ถึง 60 ปี ให้ราคา (<code>price</code>) เท่ากับ 250 บาท<br>3. นอกเหนือจากนั้น (อายุตั้งแต่ 60 ปีขึ้นไป) ให้ได้รับสิทธิ์ฟรี (<code>price</code> เท่ากับ 0 บาท)",
              initialCode: `age = 35
price = None

# เขียนคำสั่ง if-elif-else เพื่อกำหนดค่าลงในตัวแปร price ตามเกณฑ์อายุ
`,
              testCode: `
# ตัวช่วยทดสอบเงื่อนไข
def check_price(test_age):
    # จำลอง logic
    age = test_age
    price = 0
    # บล็อกคำสั่งของคุณจะรันด้วย eval/exec
    try:
        # ดึงคำสั่งมาทำ
        exec(code_submitted, globals(), locals())
        return locals().get('price')
    except Exception as e:
        return f"ERROR: {e}"

try:
    p1 = check_price(10)
    p2 = check_price(35)
    p3 = check_price(65)
    
    assert p1 == 100, f"สำหรับอายุ 10 ปี ค่าผ่านประตูควรเป็น 100 แต่ได้ {p1}"
    assert p2 == 250, f"สำหรับอายุ 35 ปี ค่าผ่านประตูควรเป็น 250 แต่ได้ {p2}"
    assert p3 == 0, f"สำหรับอายุ 65 ปี ค่าผ่านประตูควรเป็น 0 แต่ได้ {p3}"
    print("SUCCESS: การตรวจสอบเงื่อนไขราคาสวนสนุกถูกต้องสมบูรณ์!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        },
        {
          id: "m1_4_loops",
          title: "คำสั่งวนซ้ำ (Loops - for, while)",
          content: `
            <h3>คำสั่งวนซ้ำ (Loops: for, while)</h3>
            <p>การเขียนโปรแกรมที่ดีต้องสามารถลดทอนการเขียนโค้ดที่ทำงานซ้ำกันหลายรอบได้ โดยใช้ <strong>Loop</strong> เข้าช่วยเพื่อสั่งให้โปรแกรมทำงานซ้ำๆ ตามเงื่อนไข</p>
            
            <h4>1. คำสั่งวนซ้ำ <code>for</code></h4>
            <p>มักใช้เมื่อเราทราบจำนวนรอบการทำงานล่วงหน้าที่แน่นอน หรือใช้ในการวนซ้ำเข้าถึงข้อมูลในชนิดข้อมูลแบบรายการ (เช่น ลิสต์ ข้อความ หรืออาร์เรย์)</p>
            <p>ฟังก์ชันที่ใช้คู่กับ loop for บ่อยที่สุดคือ <code>range()</code> เพื่อสร้างชุดลำดับตัวเลข:</p>
            <ul>
              <li><code>range(n)</code>: สร้างลำดับตัวเลขจาก 0 ถึง n-1 (เช่น <code>range(5)</code> ได้ 0, 1, 2, 3, 4)</li>
              <li><code>range(start, stop)</code>: สร้างตัวเลขจาก start ถึง stop-1</li>
              <li><code>range(start, stop, step)</code>: สร้างตัวเลขเพิ่มขึ้นหรือลดลงทีละ step</li>
            </ul>
            <pre><code class="language-python"># พิมพ์ 0 ถึง 4
for i in range(5):
    print(i)</code></pre>

            <h4>2. คำสั่งวนซ้ำ <code>while</code></h4>
            <p>จะทำงานซ้ำไปเรื่อยๆ ตราบใดที่เงื่อนไขหลังคำสั่ง <code>while</code> ยังคงเป็นจริง (<code>True</code>) และจะหยุดทำงานเมื่อเงื่อนไขเปลี่ยนเป็นเท็จ (<code>False</code>)</p>
            <div class="note-box warning">
              <strong>⚠️ ระวังเรื่อง Infinite Loop (การวนลูปไม่รู้จบ):</strong> ตรวจสอบให้แน่ใจว่าภายในบล็อกคำสั่งของ <code>while</code> มีคำสั่งที่จะทำให้เงื่อนไขเป็นเท็จได้ในที่สุด (เช่น การเพิ่มค่าตัวแปรควบคุม <code>count += 1</code>)
            </div>
            <pre><code class="language-python">count = 1
while count <= 5:
    print(count)
    count += 1 # หากไม่มีคำสั่งนี้ ลูปจะทำงานตลอดไปไม่มีวันจบ!</code></pre>
          `,
          playgroundCode: `# ลองรันคำสั่งเปรียบเทียบระหว่าง for และ while loop
print("--- ทดสอบ for loop ---")
for num in range(2, 10, 2):
    print("ค่า num:", num)

print("--- ทดสอบ while loop ---")
i = 5
while i > 0:
    print("นับถอยหลัง:", i)
    i -= 1
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "คำสั่งใดต่อไปนี้จะทำให้ลูปทำงานทั้งหมด 5 รอบพอดี?",
              options: [
                "for i in range(1, 5):",
                "for i in range(5):",
                "for i in range(0, 10, 3):",
                "for i in range(6):"
              ],
              answer: 1,
              explanation: "range(5) จะสร้างลำดับจำนวนเต็มคือ 0, 1, 2, 3, 4 ซึ่งนับจำนวนรอบแล้วได้เท่ากับ 5 รอบพอดี"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "ผลการรันชุดคำสั่งด้านล่างนี้ จะแสดงผลการรันทางหน้าจออย่างไร?",
              code: `total = 0
for i in range(1, 4):
    total += i
print(total)`,
              answer: "6",
              explanation: "1. ลูปแรก i = 1: total = 0 + 1 = 1\n2. ลูปสอง i = 2: total = 1 + 2 = 3\n3. ลูปรอบสุดท้าย i = 3: total = 3 + 3 = 6\nเมื่อสั่งพิมพ์ total จึงได้ค่าเท่ากับ 6"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงเขียนโปรแกรมหาผลรวมของเลขคู่ตั้งแต่ 2 ถึง 10 (ได้แก่ 2, 4, 6, 8, 10) โดยเก็บผลรวมไว้ในตัวแปรชื่อ <code>sum_even</code>",
              initialCode: `sum_even = 0

# เขียน loop (for หรือ while) คำนวณหาผลรวมของเลขคู่
`,
              testCode: `
try:
    assert 'sum_even' in locals(), "ยังไม่ได้ประกาศตัวแปร sum_even"
    # 2+4+6+8+10 = 30
    assert sum_even == 30, f"ผลรวมไม่ถูกต้อง ค่าที่คำนวณได้คือ {sum_even} แต่ผลรวมที่ถูกต้องคือ 30"
    print("SUCCESS: คำนวณผลรวมเลขคู่สำเร็จ!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        }
      ]
    },
    {
      id: "module2",
      title: "2. โครงสร้างข้อมูล (Data Structures)",
      lessons: [
        {
          id: "m2_1_lists",
          title: "List (โครงสร้างข้อมูลแบบรายการที่แก้ไขได้)",
          content: `
            <h3>List (ลิสต์)</h3>
            <p><strong>List</strong> เป็นหนึ่งในโครงสร้างข้อมูลพื้นฐานที่ใช้บ่อยที่สุดในภาษา Python ใช้เพื่อจัดเก็บกลุ่มของข้อมูลที่เรียงลำดับต่อเนื่องกันลงในตัวแปรเดียว ข้อมูลในลิสต์ไม่จำเป็นต้องเป็นชนิดเดียวกัน และลิสต์สามารถปรับเปลี่ยนขนาด เพิ่ม ลบ หรือแก้ไขข้อมูลได้ตลอดเวลา (Mutable)</p>
            
            <h4>1. การสร้างลิสต์และการระบุตำแหน่ง (Index)</h4>
            <p>ลิสต์จะถูกสร้างขึ้นภายใต้เครื่องหมายวงเล็บเหลี่ยม <code>[]</code> (square brackets) และคั่นด้วยเครื่องหมายจุลภาค <code>,</code></p>
            <p>การดึงข้อมูลรายตัวจะระบุผ่านดัชนีชี้ตำแหน่ง (Index) โดย <strong>ดัชนีตัวแรกเริ่มต้นที่ตำแหน่งที่ 0 เสมอ</strong> และสามารถดึงจากท้ายลิสต์ด้วยดัชนีติดลบ (เช่น -1 คือตัวสุดท้าย)</p>
            <pre><code class="language-python">fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # แสดงผล: "apple"
print(fruits[-1])  # แสดงผล: "cherry" (ตัวสุดท้าย)</code></pre>

            <h4>2. ฟังก์ชันและเมธอดที่สำคัญของ List</h4>
            <ul>
              <li><code>append(item)</code>: เพิ่มข้อมูลใหม่ต่อท้ายลิสต์</li>
              <li><code>insert(index, item)</code>: แทรกข้อมูลใหม่ลงในตำแหน่งดัชนีที่กำหนด</li>
              <li><code>remove(item)</code>: ลบข้อมูลที่กำหนดรายการแรกที่พ้นในลิสต์</li>
              <li><code>pop(index)</code>: นำข้อมูลออกและคืนค่าตามดัชนีชี้ตำแหน่ง (ถ้าไม่ใส่จะนำตัวท้ายสุดออก)</li>
              <li><code>len(list_name)</code>: หาจำนวนสมาชิกทั้งหมดในลิสต์</li>
            </ul>
          `,
          playgroundCode: `# ทดสอบจัดการข้อมูลในลิสต์
menu = ["ผัดกะเพรา", "ข้าวผัด"]
print("เริ่มต้น:", menu)

# 1. เพิ่มเมนูใหม่เข้าไปท้ายลิสต์
menu.append("แกงจืด")
print("หลัง append:", menu)

# 2. แก้ไขสมาชิกตัวแรกสุด
menu[0] = "กะเพราไข่ดาว"
print("หลังแก้ไขตัวแรก:", menu)

# 3. ตรวจสอบความยาวของลิสต์
print("มีอาหารทั้งหมด:", len(menu), "อย่าง")
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "หากมีตัวแปร `scores = [50, 60, 70, 80]` ตัวเลือกใดด้านล่างนี้จะเพิ่มเลข `90` ลงไปต่อท้ายแถวข้อมูลของ scores ได้อย่างถูกต้อง?",
              options: [
                "scores.add(90)",
                "scores.append(90)",
                "scores.insert(90)",
                "scores.push(90)"
              ],
              answer: 1,
              explanation: "append() เป็นคำสั่งที่ออกแบบมาใช้เพิ่มสมาชิกใหม่เข้าไปที่ส่วนท้ายสุดของ List เสมอ"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "โค้ดต่อไปนี้จะแสดงผลลัพธ์หน้าจอออกมาเป็นอย่างไร?",
              code: `colors = ["red", "green", "blue"]
colors.insert(1, "yellow")
colors.pop()
print(colors)`,
              answer: "['red', 'yellow', 'green']",
              explanation: "1. เริ่มต้น: ['red', 'green', 'blue']\n2. ทำการแทรก 'yellow' ลงใน index ที่ 1 (แทนที่หน้า green) จะได้: ['red', 'yellow', 'green', 'blue']\n3. สั่ง pop() โดยไม่ระบุ index จะนำข้อมูลตัวท้ายสุดคือ 'blue' ออก ได้ผลลัพธ์เป็น: ['red', 'yellow', 'green']"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "กำหนดลิสต์ของจำนวนเต็มชื่อ <code>numbers = [5, 12, 8, 21, 3]</code> จงเขียนคำสั่งเพื่อลบตัวเลข <code>21</code> ออกจากลิสต์ จากนั้นให้เพิ่มตัวเลข <code>99</code> ต่อท้ายลิสต์ดังกล่าวให้สมบูรณ์",
              initialCode: `numbers = [5, 12, 8, 21, 3]

# 1. ลบ 21 ออกจากลิสต์ numbers

# 2. เพิ่ม 99 เข้าสู่ลิสต์ numbers ต่อท้ายสุด

`,
              testCode: `
try:
    assert 'numbers' in locals(), "ห้ามลบตัวแปร numbers"
    assert 21 not in numbers, "ต้องลบ 21 ออกจากลิสต์สำเร็จ"
    assert numbers[-1] == 99, "ต้องเพิ่ม 99 ต่อท้ายลิสต์สำเร็จ"
    assert len(numbers) == 5, f"จำนวนสมาชิกในลิสต์ต้องมี 5 ตัว แต่ได้ {len(numbers)}"
    assert numbers == [5, 12, 8, 3, 99], f"ลำดับสมาชิกไม่ถูกต้อง: {numbers}"
    print("SUCCESS: ปรับปรุงโครงสร้างลิสต์ได้สมบูรณ์ตามสั่ง!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        },
        {
          id: "m2_2_tuples",
          title: "Tuple (โครงสร้างข้อมูลแบบรายการที่ไม่สามารถเปลี่ยนค่าได้)",
          content: `
            <h3>Tuple (ทูเพิล)</h3>
            <p><strong>Tuple</strong> มีความคล้ายคลึงกับ List เป็นการเก็บรวบรวมกลุ่มข้อมูลเป็นลำดับขั้นตอน แต่มีคุณสมบัติที่สำคัญคือ <strong>ไม่สามารถทำการแก้ไข เพิ่ม เติม หรือลบสมาชิกหลังจากสร้างขึ้นได้แล้ว (Immutable)</strong></p>
            
            <h4>1. วิธีการสร้าง Tuple</h4>
            <p>ทูเพิลจะใช้วงเล็บโค้ง <code>()</code> (parentheses) ในการครอบรายการข้อมูล</p>
            <pre><code class="language-python">coordinates = (13.7563, 100.5018) # ละติจูดและลองจิจูดของกรุงเทพฯ
print(coordinates[0]) # เข้าถึงดัชนีที่ 0 ได้เหมือนปกติ</code></pre>

            <h4>2. ทำไมต้องใช้ Tuple แทนที่จะใช้ List?</h4>
            <ul>
              <li><strong>ความปลอดภัยของข้อมูล (Data Integrity):</strong> ป้องกันการเขียนทับข้อมูลโดยไม่เจตนา เหมาะกับข้อมูลที่เป็นค่าคงที่ เช่น พิกัดแผนที่, วันเดือนปีเกิด, หรือค่าการตั้งค่าระบบ</li>
              <li><strong>ประสิทธิภาพสูง (Performance):</strong> Python ประมวลผล Tuple ได้เร็วกว่า List และใช้พื้นที่บน RAM น้อยกว่า</li>
            </ul>

            <div class="note-box warning">
              <strong>⚠️ สิ่งที่ห้ามทำกับ Tuple:</strong> การพยายามรันโค้ดประเภท <code>coordinates[0] = 14.5</code> จะเกิดข้อผิดพลาด <code>TypeError</code> ขึ้นมาทันที เนื่องจาก Tuple ไม่อนุญาตการเขียนทับค่าข้อมูล
            </div>
          `,
          playgroundCode: `# ลองเข้าถึงทูเพิลและจำลองข้อผิดพลาดเมื่อเราพยายามแก้ไขข้อมูล
days_of_week = ("จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์")

print("วันแรกของสัปดาห์:", days_of_week[0])
print("มีวันในระบบ:", len(days_of_week), "วัน")

# ลองเปิดคอมเม้นต์ด้านล่างนี้แล้วกด Run เพื่อดู Error
# days_of_week[0] = "จันทร์สีทอง"
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "ตัวเลือกใดกล่าวถึงความแตกต่างระหว่าง List และ Tuple ได้อย่างถูกต้องที่สุด?",
              options: [
                "List สร้างด้วยวงเล็บ () ส่วน Tuple สร้างด้วยวงเล็บ {}",
                "List สามารถแก้ไขเปลี่ยนแปลงสมาชิกได้ ส่วน Tuple ไม่สามารถแก้ไขเปลี่ยนแปลงสมาชิกได้",
                "Tuple สามารถมีสมาชิกข้อมูลต่างชนิดกันได้ แต่ List ต้องเป็นชนิดเดียวกันเท่านั้น",
                "Tuple สามารถเรียกใช้งานผ่านดัชนีชี้ตำแหน่งได้ แต่ List เข้าดัชนีไม่ได้"
              ],
              answer: 1,
              explanation: "ความแตกต่างสำคัญคือ List แก้ไขข้อมูลได้ (Mutable) แต่ Tuple หลังจากสร้างแล้วจะไม่สามารถแก้ไขค่า เพิ่ม หรือลบข้อมูลได้ (Immutable)"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "ผลลัพธ์การรันโปรแกรมด้านล่างนี้จะให้ผลลัพธ์เป็นอย่างไร?",
              code: `t = (1, 2, 3)
new_t = t + (4, 5)
print(new_t)`,
              answer: "(1, 2, 3, 4, 5)",
              explanation: "ถึงแม้ว่า Tuple จะไม่สามารถเปลี่ยนแปลงค่าสมาชิกภายในได้ แต่การใช้ตัวดำเนินการ '+' จะเป็นการสร้าง Tuple ขึ้นมาใหม่ที่นำสมาชิกของทั้งสองทูเพิลมารวมกัน"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงสร้าง Tuple ชื่อ <code>student_info</code> ที่เก็บข้อมูล 3 รายการตามลำดับดังนี้:<br>1. รหัสนักศึกษา (String) ตัวอย่าง: '660101'<br>2. ชื่อเล่นนักศึกษา (String) ตัวอย่าง: 'กิตติ'<br>3. คะแนนเฉลี่ยสะสม GPA (Float) ตัวอย่าง: 3.85",
              initialCode: `# ประกาศตัวแปร student_info เป็นทูเพิลเก็บข้อมูล 3 รายการตามที่กำหนด
student_info = 
`,
              testCode: `
try:
    assert 'student_info' in locals(), "ยังไม่ได้ประกาศตัวแปร student_info"
    assert isinstance(student_info, tuple), "student_info ต้องเป็นข้อมูลชนิด tuple เท่านั้น"
    assert len(student_info) == 3, "ทูเพิล student_info ต้องมีสมาชิกครบ 3 ตัว"
    assert isinstance(student_info[0], str), "สมาชิกตัวแรกต้องเป็นข้อความ (String)"
    assert isinstance(student_info[1], str), "สมาชิกตัวที่สองต้องเป็นข้อความ (String)"
    assert isinstance(student_info[2], float), "สมาชิกตัวที่สามต้องเป็นตัวเลขทศนิยม (Float)"
    print("SUCCESS: สร้างทูเพิลข้อมูลนักศึกษาสำเร็จและชนิดข้อมูลถูกต้อง!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        },
        {
          id: "m2_3_dictionaries",
          title: "Dictionary (โครงสร้างข้อมูลแบบคู่ Key-Value)",
          content: `
            <h3>Dictionary (พจนานุกรมข้อมูล)</h3>
            <p><strong>Dictionary</strong> ใน Python เป็นโครงสร้างข้อมูลที่จัดเก็บข้อมูลแบบจับคู่ระหว่าง **คีย์ (Key)** และ **ค่าข้อมูล (Value)** เหมาะสำหรับการสืบค้น ค้นหา หรืออัปเดตข้อมูลได้อย่างรวดเร็ว โดยไม่จำเป็นต้องใช้ดัชนีชี้ตำแหน่งเป็นตัวเลขเหมือนลิสต์</p>
            
            <h4>1. โครงสร้างและการใช้งาน</h4>
            <p>Dictionary จะครอบข้อมูลด้วยเครื่องหมายวงเล็บปีกกา <code>{}</code> (curly braces) โดยแต่ละคู่ของข้อมูลจะระบุในรูปแบบ <code>Key: Value</code> และถูกแยกกันด้วยเครื่องหมายจุลภาค <code>,</code></p>
            <pre><code class="language-python"># โครงสร้าง: ดิกชันนารี = { key1: value1, key2: value2 }
student = {
    "id": "66010023",
    "name": "วิษณุ",
    "gpa": 3.75
}

# การเข้าถึงข้อมูลจะระบุด้วยชื่อ Key
print(student["name"])  # แสดงผล: "วิษณุ"</code></pre>

            <h4>2. คุณลักษณะสำคัญของ Dictionary</h4>
            <ul>
              <li><strong>Key จะต้องไม่ซ้ำกัน (Unique):</strong> หากเราเขียนกำหนด Key ซ้ำกัน ค่าล่าสุดจะไปทับค่าเดิม</li>
              <li><strong>การสืบค้นที่รวดเร็วมาก:</strong> มีประสิทธิภาพในการเข้าถึงข้อมูลดีเยี่ยมเพราะมีกลไก Hash map อยู่เบื้องหลัง</li>
              <li><strong>การแก้ไขและการเพิ่มค่าใหม่:</strong> ทำได้ง่ายดายโดยการเรียกคีย์แล้วกำหนดค่าใหม่ได้ทันที เช่น <code>student["major"] = "Computer Science"</code></li>
            </ul>
          `,
          playgroundCode: `# ทดลองสร้างและเข้าถึงข้อมูลในดิกชันนารี
course = {
    "code": "CS101",
    "name": "Intro to Programming",
    "credits": 3
}

print("รายวิชา:", course["name"])

# เพิ่มคีย์ผู้สอนผู้จัดการ
course["instructor"] = "อ.ดร. ทศวิวัฒน์"
print("ข้อมูลวิชาล่าสุด:", course)

# แก้ไขจานวนหน่วยกิต
course["credits"] = 4
print("แก้ไขหน่วยกิต:", course["credits"])
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "เมื่อกำหนดให้ `user = {'username': 'alice', 'role': 'admin'}` การดึงค่าชื่อบทบาท 'admin' ออกมาแสดง ต้องเขียนคำสั่งใด?",
              options: [
                "user[1]",
                "user['role']",
                "user.get_value('role')",
                "user.keys('role')"
              ],
              answer: 1,
              explanation: "การดึงข้อมูลจากดิกชันนารีทำได้โดยการใส่ชื่อ Key ไว้ในวงเล็บเหลี่ยมด้านหลังตัวแปร ดังนั้น user['role'] จะให้ค่าเป็น 'admin'"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "ผลลัพธ์จากการสั่งพิมพ์ขนาดความยาวของดิกชันนารี `len(scores)` ด้านล่างนี้คือตัวเลขใด?",
              code: `scores = {"math": 85, "science": 90, "math": 95}
print(len(scores))`,
              answer: "2",
              explanation: "ดิกชันนารีไม่อนุญาตให้มี Key ซ้ำกันได้ เมื่อระบบเจอ 'math': 85 และเจอ 'math': 95 ข้อมูลตัวหลังสุดจะไปทับข้อมูลตัวแรก ทำให้ในความจริงมีข้อมูลอยู่เพียง 2 คู่คือ 'math': 95 และ 'science': 90 ดังนั้น len(scores) จึงได้ผลลัพธ์เป็น 2"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงสร้าง Dictionary ชื่อ <code>car</code> เพื่อเก็บข้อมูลรถยนต์คันหนึ่งที่มีข้อมูลดังนี้:<br>1. คีย์ <code>brand</code> เก็บค่าเป็นข้อความ 'Toyota'<br>2. คีย์ <code>model</code> เก็บค่าเป็นข้อความ 'Yaris'<br>3. คีย์ <code>year</code> เก็บค่าเป็นจำนวนเต็ม 2022<br>จากนั้นให้ทำการเขียนโค้ดเพิ่มคีย์ใหม่ชื่อ <code>color</code> โดยให้เก็บค่าสีว่า 'White' และอัปเดตปีของรถยนต์ (<code>year</code>) ให้กลายเป็น 2024",
              initialCode: `# 1. สร้างดิกชันนารี car พร้อมข้อมูล brand, model, year
car = 

# 2. เพิ่มคีย์ color และกำหนดค่าเป็น 'White'


# 3. อัปเดตคีย์ year เป็น 2024


`,
              testCode: `
try:
    assert 'car' in locals(), "ยังไม่ได้สร้างตัวแปร car"
    assert isinstance(car, dict), "ตัวแปร car ต้องเป็นข้อมูลชนิด Dictionary"
    assert car.get('brand') == 'Toyota', "แบรนด์รถยนต์ต้องเป็น 'Toyota'"
    assert car.get('model') == 'Yaris', "รุ่นรถยนต์ต้องเป็น 'Yaris'"
    assert car.get('color') == 'White', "ต้องเพิ่มคีย์ color ที่มีค่าเป็น 'White'"
    assert car.get('year') == 2024, "ปีของรถยนต์ต้องได้รับการอัปเดตเป็น 2024"
    print("SUCCESS: จัดการดิกชันนารีข้อมูลรถยนต์สมบูรณ์และถูกต้องหมดทุกคีย์!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        }
      ]
    },
    {
      id: "module3",
      title: "3. การใช้งานฟังก์ชัน (Functions)",
      lessons: [
        {
          id: "m3_1_functions",
          title: "การสร้างและใช้งานฟังก์ชัน (Functions)",
          content: `
            <h3>การใช้งานฟังก์ชัน (Functions)</h3>
            <p><strong>ฟังก์ชัน (Function)</strong> คือ บล็อกหรือชุดคำสั่งที่เขียนขึ้นมาเพื่อทำงานเฉพาะอย่างใดอย่างหนึ่ง มีจุดประสงค์เพื่อลดการเขียนโค้ดซ้ำ ทำให้โค้ดเป็นระบบระเบียบ อ่านง่ายขึ้น และสามารถนำกลับมาใช้งานใหม่ได้อย่างสะดวกสบาย (Reusability)</p>
            
            <h4>1. การประกาศฟังก์ชันด้วยคำสั่ง <code>def</code></h4>
            <p>ใน Python จะใช้คีย์เวิร์ด <code>def</code> ตามด้วยชื่อฟังก์ชันและวงเล็บ <code>()</code> ซึ่งภายในวงเล็บอาจมีตัวแปรรับข้อมูลส่งต่อเข้ามา หรือไม่มีก็ได้ สิ้นสุดการนิยามด้วยโคลอน <code>:</code> และเขียนบล็อกคำสั่งแบบย่อหน้าย่อย</p>
            <pre><code class="language-python"># โครงสร้างแบบไม่มีการรับค่าและส่งค่ากลับ
def say_hello():
    print("สวัสดีปี 1 ทุกคน!")

# วิธีเรียกใช้งานฟังก์ชัน
say_hello()</code></pre>

            <h4>2. การรับค่าและการส่งค่าคืนกลับ (Arguments & Return Values)</h4>
            <p>ฟังก์ชันที่มีประสิทธิผลมักจะต้องนำข้อมูลภายนอกไปประมวลผล และสามารถส่งผลลัพธ์กลับมาใช้งานต่อได้:</p>
            <ul>
              <li><strong>พารามิเตอร์ (Parameters):</strong> ตัวแปรที่ใช้กำหนดไว้ในวงเล็บตอนนิยามฟังก์ชัน เพื่อรอรับค่าจากภายนอก</li>
              <li><strong>อาร์กิวเมนต์ (Arguments):</strong> ค่าจริงที่ถูกส่งเข้าไปให้ฟังก์ชันตอนถูกเรียกใช้</li>
              <li><strong>การส่งผลลัพธ์กลับ (Return Value):</strong> การใช้คำสั่ง <code>return</code> เพื่อส่งผลลัพธ์ของการประมวลผลกลับไปยังโค้ดที่เรียกใช้งาน ฟังก์ชันจะหยุดทำงานทันทีเมื่อพบคำสั่ง return</li>
            </ul>
            <pre><code class="language-python"># ฟังก์ชันหาผลบวกเลขสองตัว
def add_numbers(a, b): # a, b คือ Parameter
    sum_result = a + b
    return sum_result  # คืนค่าผลรวมกลับไป

# เรียกใช้ฟังก์ชันแล้วรับค่าใส่ตัวแปร
total = add_numbers(15, 30) # 15, 30 คือ Argument
print(total) # แสดงผล: 45</code></pre>

            <div class="note-box info">
              <strong>💡 ประโยชน์ของการใช้ return:</strong> การใช้ <code>return</code> แตกต่างจาก <code>print()</code> เนื่องจากผลลัพธ์ที่ได้จากการ return สามารถนำไปคำนวณหรือใช้ประมวลผลร่วมกับคำสั่งส่วนอื่นของโปรแกรมต่อได้
            </div>
          `,
          playgroundCode: `# ทดสอบการเขียนและทำงานของฟังก์ชัน
def calculate_grade(score):
    if score >= 80:
        return "เกียรตินิยม อันดับ 1"
    elif score >= 70:
        return "ดีมาก"
    elif score >= 50:
        return "ผ่านเกณฑ์"
    else:
        return "ตก"

# ทดลองเรียกฟังก์ชันด้วยค่าต่างกัน
student_a = calculate_grade(85)
student_b = calculate_grade(45)

print("นักศึกษา A สถานะ:", student_a)
print("นักศึกษา B สถานะ:", student_b)
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "คำสั่งสำคัญข้อใดที่ใช้สำหรับส่งคืนผลลัพธ์การประมวลผลออกจากฟังก์ชันเพื่อนำไปใช้งานต่อในโปรแกรม?",
              options: [
                "send",
                "output",
                "return",
                "break"
              ],
              answer: 2,
              explanation: "return คือคีย์เวิร์ดของ Python ที่ใช้ในการส่งผลลัพธ์จากการทำงานภายในฟังก์ชันออกไปยังจุดที่เรียกใช้ และหยุดการทำงานของฟังก์ชันนั้นทันที"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "ผลลัพธ์จากการรันโค้ดโปรแกรมด้านล่างนี้คืออะไร?",
              code: `def multiply(x, y=2):
    return x * y

result = multiply(5) + multiply(3, 4)
print(result)`,
              answer: "22",
              explanation: "1. multiply(5) จะใช้ค่าดีฟอลต์พารามิเตอร์ y=2 ดังนั้นจึงได้ 5 * 2 = 10\n2. multiply(3, 4) มีการส่งค่า y=4 เข้าไปทับค่าเดิม จึงได้ 3 * 4 = 12\n3. นำผลลัพธ์มาบวกกัน 10 + 12 ได้เท่ากับ 22"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงสร้างฟังก์ชันชื่อ <code>is_even(number)</code> ที่รับพารามิเตอร์ 1 ตัวเป็นจำนวนเต็ม จากนั้นทำการตรวจสอบค่า:<br>- ถ้าตัวเลขนั้นเป็นเลขคู่ ให้ส่งค่ากลับ (<code>return</code>) เป็น <code>True</code><br>- ถ้าตัวเลขนั้นเป็นเลขคี่ ให้ส่งค่ากลับ (<code>return</code>) เป็น <code>False</code>",
              initialCode: `def is_even(number):
    # เขียนเงื่อนไขเพื่อตรวจสอบและส่งกลับค่า True หรือ False
    
`,
              testCode: `
try:
    assert 'is_even' in locals(), "ยังไม่ได้นิยามฟังก์ชัน is_even"
    assert callable(is_even), "is_even ต้องเป็นฟังก์ชันที่เรียกใช้งานได้"
    assert is_even(4) == True, "เมื่อระบุค่า 4 ผลลัพธ์ต้องคืนค่า True"
    assert is_even(7) == False, "เมื่อระบุค่า 7 ผลลัพธ์ต้องคืนค่า False"
    assert is_even(0) == True, "เมื่อระบุค่า 0 ผลลัพธ์ต้องคืนค่า True"
    print("SUCCESS: ฟังก์ชัน is_even ทำงานอย่างถูกต้องไร้ข้อบกพร่อง!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        }
      ]
    },
    {
      id: "module4",
      title: "4. การจัดการไฟล์และการทำงานระดับสูง",
      lessons: [
        {
          id: "m4_1_files",
          title: "การจัดการไฟล์ (File Handling - open, read, write)",
          content: `
            <h3>การจัดการไฟล์ (File Handling)</h3>
            <p>ในการประยุกต์ใช้งานจริง ข้อมูลไม่ได้อยู่ในตัวแปรอย่างเดียว แต่อาจถูกเก็บรักษาไว้ในไฟล์ถาวรภายนอก ดังนั้นการรู้หลักการอ่านและเขียนข้อมูลลงไฟล์จึงเป็นทักษะที่สำคัญอย่างยิ่งสำหรับนักศึกษาคอมพิวเตอร์</p>
            
            <h4>1. การทำงานกับไฟล์ด้วยคำสั่ง <code>open()</code></h4>
            <p>ภาษา Python มีฟังก์ชันบิวท์อินที่ชื่อว่า <code>open(file_path, mode)</code> เพื่อเชื่อมต่อไปยังไฟล์ภายนอก โดยมีโหมด (Mode) หลักดังนี้:</p>
            <ul>
              <li><code>"r"</code> (Read): โหมดสำหรับอ่านข้อมูลในไฟล์อย่างเดียว (เป็นโหมดเริ่มต้น ถ้าไม่ระบุจะเลือกโหมดนี้ให้)</li>
              <li><code>"w"</code> (Write): โหมดสำหรับเขียนทับข้อมูลลงไฟล์ (สร้างไฟล์ใหม่ทันทีหากยังไม่มีไฟล์นั้น หรือล้างข้อความเก่าทิ้งหากมีอยู่แล้ว)</li>
              <li><code>"a"</code> (Append): โหมดเขียนต่อท้าย (แทรกข้อความใหม่ต่อจากข้อความเดิมที่มีอยู่แล้ว)</li>
            </ul>

            <h4>2. รูปแบบการเปิดปิดไฟล์ที่ปลอดภัย (with statement)</h4>
            <p>ในการเขียนปกติ หลังจากเปิดไฟล์และประมวลผลเสร็จแล้ว เราต้องเรียกคำสั่ง <code>close()</code> เพื่อคืนทรัพยากรระบบให้กับคอมพิวเตอร์ แต่หากระบบเกิด error ระหว่างทำงาน บรรทัดปิดไฟล์อาจรันไม่ถึง</p>
            <p>ทางแก้ที่ดีที่สุดและเป็นมาตรฐานใน Python คือการเปิดไฟล์ผ่านโครงสร้างคำสั่ง <code>with</code> ซึ่งระบบจะทำการปิดไฟล์ให้โดยอัตโนมัติแม้ว่าโปรแกรมจะพังระหว่างทางก็ตาม</p>
            
            <pre><code class="language-python"># ตัวอย่างการเขียนไฟล์
with open("data.txt", "w") as file:
    file.write("ยินดีต้อนรับเข้าสู่วิชาคอมพิวเตอร์เบื้องต้น\\n")
    file.write("Python is very easy!")

# ตัวอย่างการอ่านไฟล์
with open("data.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>
          `,
          playgroundCode: `# จำลองระบบจัดการไฟล์บนหน่วยความจำเสมือนของหน้าเว็บบราวเซอร์
# เราสร้างและเขียนไฟล์ชื่อ output.txt ขึ้นมา
with open("output.txt", "w") as f:
    f.write("66010099 สมชาย รักเรียน\\n")
    f.write("66010100 สมหญิง ขยันศึกษา")

print("--- เขียนไฟล์สำเร็จแล้ว ---")

# ทีนี้ลองอ่านไฟล์นั้นกลับเข้ามาแสดงผล
print("--- เริ่มต้นอ่านเนื้อหาในไฟล์ ---")
with open("output.txt", "r") as f:
    text_data = f.read()
    print(text_data)
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "ในกรณีที่ต้องการเปิดไฟล์เขียนข้อมูลต่อท้ายข้อมูลเดิมโดยไม่ลบของเก่าทิ้ง ต้องใช้โหมดใดในฟังก์ชัน open()?",
              options: [
                "mode = 'r'",
                "mode = 'w'",
                "mode = 'a'",
                "mode = 'x'"
              ],
              answer: 2,
              explanation: "โหมด 'a' ย่อมาจาก Append มีหน้าที่เปิดไฟล์เพื่อเขียนข้อมูลแทรกต่อยอดจากข้อมูลดั้งเดิมที่มีอยู่ในไฟล์โดยไม่ทำการลบหรือเขียนทับ"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "พิจารณาโค้ดด้านล่างนี้ หากไม่มีไฟล์ชื่อ `log.txt` อยู่ในโฟลเดอร์รันงาน จะเกิดเหตุการณ์ใดขึ้นเมื่อรันโค้ด?",
              code: `with open("log.txt", "w") as f:
    f.write("System online")`,
              answer: "จะสร้างไฟล์ชื่อ log.txt ใหม่ให้โดยอัตโนมัติและไม่เกิดข้อผิดพลาด",
              explanation: "เมื่อทำการเปิดไฟล์ด้วยโหมด 'w' หรือ 'a' หาก Python ค้นพบว่าไม่มีไฟล์ชื่อนั้นๆ อยู่ ระบบจะทำหน้าที่อำนวยความสะดวกในการจัดสร้างไฟล์ขึ้นมาใหม่ให้โดยทันที"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงเขียนโปรแกรมอ่านเนื้อหาในไฟล์ชื่อ <code>grades.txt</code> (ซึ่งมีข้อมูลเกรดตัวเลขบันทึกไว้) แล้วแปลงข้อมูลทั้งหมดเป็นตัวเลขทศนิยม (Float) จากนั้นนำมาหาค่าเฉลี่ยและเก็บไว้ในตัวแปรชื่อ <code>gpa_average</code><br><br>*หมายเหตุ: ระบบได้แอบสร้างไฟล์ <code>grades.txt</code> ไว้ให้ท่านทดสอบเรียบร้อยแล้ว*",
              initialCode: `# โค้ดเตรียมการสร้างไฟล์ทดลองให้อัตโนมัติ (ห้ามลบบรรทัดนี้)
with open("grades.txt", "w") as f: f.write("3.5\\n3.0\\n4.0\\n3.5")

# 1. เขียนคำสั่งเปิดอ่านข้อมูลจากไฟล์ grades.txt
# 2. นำคะแนนแต่ละบรรทัดมาเปลี่ยนเป็น float และหาค่าเฉลี่ย
# 3. เก็บผลลัพธ์สุดท้ายไว้ในตัวแปร gpa_average
gpa_average = 0.0

`,
              testCode: `
try:
    assert 'gpa_average' in locals(), "ยังไม่ได้สร้างตัวแปร gpa_average"
    # (3.5 + 3.0 + 4.0 + 3.5) / 4 = 14.0 / 4 = 3.5
    assert gpa_average == 3.5, f"คำนวณค่าเฉลี่ยไม่ถูกต้อง ค่าเฉลี่ยที่ได้คือ {gpa_average} แต่ค่าเฉลี่ยที่ถูกต้องคือ 3.5"
    print("SUCCESS: อ่านและประมวลผลข้อมูลเกรดเฉลี่ยจากไฟล์เรียบร้อยและถูกต้องทั้งหมด!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        },
        {
          id: "m4_2_exceptions",
          title: "การจัดการข้อผิดพลาด (Exception Handling - try, except)",
          content: `
            <h3>การจัดการข้อผิดพลาด (Exception Handling)</h3>
            <p>เมื่อเราพัฒนาโปรแกรมขึ้นไปรันงานจริง บ่อยครั้งจะเกิดปัญหาหน้างานที่เราไม่ได้คาดคิดไว้ เช่น ผู้ใช้กรอกตัวอักษรในช่องที่ต้องการตัวเลข หรือพยายามคำนวณหารด้วยศูนย์ ส่งผลให้โปรแกรมขัดข้องและหยุดทำงานกะทันหัน (Crash) ซึ่งเป็นประสบการณ์การใช้งานที่ไม่ดีอย่างยิ่ง</p>
            
            <h4>1. โครงสร้างคำสั่ง try และ except</h4>
            <p>ภาษา Python ใช้โครงสร้าง <code>try-except</code> ในการดักจับความผิดพลาดที่เกิดขึ้นขณะรันโปรแกรม (Runtime Error) เพื่อควบคุมและจัดการปัญหาไม่ให้โปรแกรมพัง</p>
            <pre><code class="language-python">try:
    # โค้ดกลุ่มเสี่ยงที่อาจเกิดความผิดพลาดได้ขณะประมวลผล
    num = int(input("กรอกตัวเลขจำนวนเต็ม: "))
    result = 100 / num
    print("ผลลัพธ์:", result)
except ZeroDivisionError:
    # โค้ดส่วนนี้จะทำงานเมื่อมีการหารด้วยศูนย์
    print("แจ้งเตือน: ห้ามป้อนเลขศูนย์ (หารด้วยศูนย์ไม่ได้)")
except ValueError:
    # โค้ดส่วนนี้จะทำงานเมื่อผู้ใช้ไม่ได้ป้อนตัวเลข
    print("แจ้งเตือน: กรุณากรอกเฉพาะตัวเลขจำนวนเต็มเท่านั้น")
except Exception as e:
    # ดักจับข้อผิดพลาดทั่วๆ ไปอื่นๆ
    print("เกิดข้อผิดพลาดอื่น:", e)</code></pre>

            <h4>2. ข้อดีของการใช้ try-except สำหรับนักศึกษาปี 1</h4>
            <ul>
              <li>ช่วยให้แอปพลิเคชันทำงานได้อย่างราบรื่น ปลอดภัย และไม่เด้งปิดตัวเอง</li>
              <li>สามารถแจ้งเตือนผู้ใช้งานได้อย่างเป็นมิตรและตรงประเด็นเพื่อลดความสับสน</li>
              <li>ใช้ในการจัดการการอ่านไฟล์ที่อาจไม่มีอยู่จริง หรือบริการเครือข่ายอินเทอร์เน็ตหลุด</li>
            </ul>
          `,
          playgroundCode: `# ลองพิมพ์ข้อความที่ไม่ใช่ตัวเลข หรือพิมพ์เลข 0 และสังเกตการทำ try-except
input_string = "0" # ลองเปลี่ยนค่านี้เป็น "Hello" หรือ "5" ดูผลลัพธ์

try:
    number = int(input_string)
    output = 50 / number
    print("การคำนวณสำเร็จ! ผลลัพธ์ =", output)
except ValueError:
    print("ดักพบบล็อก ValueError: แปลงข้อความสีทองเป็นจำนวนเต็มไม่ได้!")
except ZeroDivisionError:
    print("ดักพบบล็อก ZeroDivisionError: มีการหารตัวเลขด้วยศูนย์!")
finally:
    print("บล็อก finally: จะทำงานบรรทัดนี้เสมอไม่ว่าจะพังหรือไม่ก็ตาม")
`,
          quizzes: [
            {
              type: "choice",
              bloomLevel: "Remembering & Understanding (จำและเข้าใจ)",
              question: "เมื่อเกิดข้อผิดพลาดขึ้นในส่วนของโค้ดที่อยู่ภายใต้คำสั่ง try บรรทัดคำสั่งต่อไปจะทำอย่างไร?",
              options: [
                "โปรแกรมหยุดทำงานทันทีและขึ้นหน้าจอฟ้องความผิดพลาดปกติ",
                "ข้ามคำสั่งที่ขัดข้องแล้วดิ่งไปทำในส่วนของ except ที่เกี่ยวข้องเพื่อทำงานต่อ",
                "วนลูปย้อนกลับไปทำคำสั่งในบรรทัดเริ่มต้นของบล็อก try ใหม่ตลอดกาล",
                "ปิดระบบปฏิบัติการของคอมพิวเตอร์ผู้ใช้ทันทีเพื่อความปลอดภัยของข้อมูล"
              ],
              answer: 1,
              explanation: "เมื่อเกิดข้อผิดพลาดภายในบล็อก try ระบบจะหยุดโค้ดบรรทัดที่เหลือในบล็อกนั้นทันที และส่งผ่านการทำงานไปยังส่วนของบล็อก except ที่ตรงกับชื่อคลาสความผิดพลาดนั้น เพื่อรับมือแก้ไขสถานการณ์ต่อโดยไม่ปิดโปรแกรมลง"
            },
            {
              type: "output",
              bloomLevel: "Applying & Analyzing (ประยุกต์ใช้และวิเคราะห์)",
              question: "พิจารณาโค้ดด้านล่างนี้ ผลลัพธ์สุดท้ายจากการพิมพ์ print(value) จะแสดงตัวเลขใดออกมา?",
              code: `value = 10
try:
    value = value + "5"
    value = value + 10
except TypeError:
    value = value + 5
print(value)`,
              answer: "15",
              explanation: "1. เริ่มต้น value = 10\n2. ในบล็อก try: value = value + \"5\" (ตัวเลขบวกกับข้อความ) จะทำให้เกิดข้อผิดพลาด TypeError ทันที ส่งผลให้บรรทัดถัดไปในบล็อก try ถูกข้ามและไม่มีการบวก 10 เพิ่ม\n3. การควบคุมจะถูกส่งไปยัง except TypeError บรรทัด value = value + 5 ซึ่งเป็น 10 + 5 จึงได้ผลลัพธ์เป็น 15"
            },
            {
              type: "coding",
              bloomLevel: "Evaluating & Creating (ประเมินค่าและสร้างสรรค์)",
              question: "จงเขียนฟังก์ชันชื่อ <code>divide_safe(a, b)</code> เพื่อทำการคำนวณ <code>a / b</code><br>โดยให้ดักจับความเสี่ยงด้วยโครงสร้าง <code>try-except</code> ดังนี้:<br>- หากเกิดข้อผิดพลาดจากการหารด้วยศูนย์ (<code>ZeroDivisionError</code>) ให้ส่งผลลัพธ์กลับ (<code>return</code>) เป็นข้อความว่า <code>'Cannot divide by zero'</code><br>- หากไม่มีข้อผิดพลาดใดๆ ให้คืนค่าผลหารที่คำนวณได้ตามปกติ",
              initialCode: `def divide_safe(a, b):
    # เขียนโครงสร้าง try-except ดักจับและคืนค่าตามคำสั่ง
    
`,
              testCode: `
try:
    assert 'divide_safe' in locals(), "ยังไม่ได้สร้างฟังก์ชัน divide_safe"
    assert callable(divide_safe), "divide_safe ต้องเป็นฟังก์ชันที่ทำงานได้"
    assert divide_safe(10, 2) == 5.0, "divide_safe(10, 2) ต้องคืนค่า 5.0"
    assert divide_safe(8, 0) == 'Cannot divide by zero', "divide_safe(8, 0) ต้องคืนข้อความ 'Cannot divide by zero'"
    print("SUCCESS: ดักจับและจัดการข้อผิดพลาดทางการหารได้ปลอดภัยและทำงานถูกต้อง!")
except AssertionError as e:
    print(f"FAIL: {e}")
except Exception as e:
    print(f"ERROR: {e}")
`
            }
          ]
        }
      ]
    }
  ]
};

// ส่งออกข้อมูลเพื่อให้เข้าถึงในไฟล์อื่นได้
if (typeof module !== 'undefined' && module.exports) {
  module.exports = courseContent;
}
